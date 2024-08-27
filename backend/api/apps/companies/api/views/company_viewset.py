from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from django.db.models import Count, IntegerField, OuterRef, Subquery,Max,Q

from apps.companies.models import Company, Recruiter
from apps.users.api.serializers import UserSerializer
from apps.vacantes.models import Vacant
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer
from apps.companies.api.serializer.company_serializer import CompanySerializer,CompanyListSerializer,UpdateCompanySerializer

class CompanyViewSet(viewsets.GenericViewSet): 
	"""
	Sin comentarios
	""" 	
	model = Company
	user_serializer = UserSerializer
	serializer_class = CompanySerializer
	list_serializer_class = CompanyListSerializer
	recruiter_serializer_class = RecruiterSerializer
	queryset = None
	company_object = {
					  "t300_name": "",
					  "t300_rfc": "",
					  "t300_bussiness_name": "",
					  "c302_id_status":""
					 }
	recruiter_object={
					  "t301_name":"",
    				  "t301_last_name":"",
					  "t301_second_surname":"",
    				  "t301_email": "",
    				  "t301_phonenumber":"",
					  "t300_id_company":"",
					  "c303_id_status":""
					}	

	def get_object(self, pk):
		self.queryset= None
		TotalPublished = Vacant.objects.filter(t300_id_company=pk).values('t300_id_company').annotate(TotalPublished=Count('t200_id_vacant'))
		TotalActive = Vacant.objects.filter(t300_id_company=pk,c204_id_vacant_status=2).values('t300_id_company').annotate(TotalActive=Count('t200_id_vacant'))		
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk)\
				.all()\
				.annotate(TotalPublished=Subquery(TotalPublished.values('TotalPublished'),output_field=IntegerField()))\
				.annotate(TotalActive=Subquery(TotalActive.values('TotalActive'),output_field=IntegerField()))	
		return  self.queryset

	def get_queryset(self):
		TotalPublished = Vacant.objects.filter(t300_id_company=OuterRef('t300_id_company')).values('t300_id_company').annotate(TotalPublished=Count('t200_id_vacant'))
		TotalActive = Vacant.objects.filter(t300_id_company=OuterRef('t300_id_company'),c204_id_vacant_status=2).values('t300_id_company').annotate(TotalActive=Count('t200_id_vacant'))		
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()\
				.annotate(TotalPublished=Subquery(TotalPublished.values('TotalPublished'),output_field=IntegerField()))\
				.annotate(TotalActive=Subquery(TotalActive.values('TotalActive'),output_field=IntegerField()))	
		return self.queryset
  

	def list(self, request):
		"""
		Obtiene todos las compañias registradas en el sistema



		Dummy text
		""" 	
		print(request.data)
		company = self.get_queryset()
		companies_serializer = self.list_serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)

	def set_company(self,data):
		company = self.company_object		
		company['t300_name'] = data['t300_name']
		company['t300_rfc'] = data['t300_rfc']
		company['t300_bussiness_name'] = data['t300_bussiness_name']
		company['c302_id_status'] = 1
		return company

	def set_recruiter(self,data):
		recruiter = self.recruiter_object
		recruiter["t301_name"] = data["t301_name"]
		recruiter["t301_last_name"] = data["t301_last_name"]
		recruiter["t301_second_surname"] = data["t301_second_surname"]
		recruiter["t301_email"] = data["t301_email"]
		recruiter["t301_phonenumber"] = data["t301_phonenumber"]
		recruiter["c303_id_status"] = "1"
		recruiter["t300_id_company"]=""
		return recruiter	

	def create(self, request):
		"""
		Registra una nueva compañia en el sistema



		Dummy text
		""" 	
		company = self.set_company(request.data)
		recruiter = self.set_recruiter(request.data)
		print(request.data)#-----------------------
		company_serializer = self.serializer_class(data=company)
		print(company_serializer.is_valid())#-----------------------
		if company_serializer.is_valid():#Crear empresa
			company_serializer.save()
			id_company = self.model.objects.filter(t300_rfc=request.data['t300_rfc']).values('t300_rfc','t300_id_company')
			print("ID de la nueva empresa", id_company[0]['t300_id_company'])#-----------------------
			recruiter['t300_id_company']=id_company[0]['t300_id_company']
			recruiter_serializer = self.recruiter_serializer_class(data=recruiter)
			if recruiter_serializer.is_valid():#Crear reclutador
				recruiter_serializer.save()				
				return Response({
					'message': 'Compañia y reclutador registrados correctamente.',
					'succes': True,
					'new_company_id':id_company[0]['t300_id_company']
					}, status=status.HTTP_201_CREATED)
			else:
				company_destroy = self.model.objects.filter(t300_rfc=request.data['t300_rfc']).delete()
				return Response({
					'message': 'Datos del reclutador incorrectos, revise la información',
					'errors': recruiter_serializer.errors,
					'succes': False
					}, status=status.HTTP_200_OK)
		else:
			return Response({
				'message': 'Datos de la empresa incorrectos, revise la información',
				'errors': company_serializer.errors,
				'succes': False 
			}, status=status.HTTP_200_OK)	
		

	def retrieve(self, request, pk):
		"""
		Obtiene la información de una compañia especifíca registrada en el sistema



		Dummy text
		""" 	
		company = self.get_object(pk)
		company_serializer = self.list_serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request):
		"""
		Actualiza la información de una compañia



		Dummy text
		""" 	
		u_company = self.model.objects.filter(t300_rfc = request.data['t300_rfc']).first()
		company_serializer = UpdateCompanySerializer(u_company, data=request.data)
		if company_serializer.is_valid():
			company_serializer.save()
			return Response({
				'message': 'Compañia actualizada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': company_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		"""
		Elimina la información de una compañia del sistema 



		Dummy text
		""" 	
		company_destroy = self.model.objects.filter(t300_id_company=pk).first()		
		if company_destroy:
			company_destroy = self.model.objects.filter(t300_id_company=pk).delete()
			return Response({
				'message': 'Compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)
