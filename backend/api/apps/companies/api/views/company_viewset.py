from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Company, Recruiter
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer
from apps.companies.api.serializer.company_serializer import CompanySerializer,CompanyListSerializer,UpdateCompanySerializer

class CompanyViewSet(viewsets.GenericViewSet):
	model = Company
	serializer_class = CompanySerializer
	list_serializer_class = CompanyListSerializer
	recruiter_serializer_class = RecruiterSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		print(request.data)
		company = self.get_queryset()
		companies_serializer = self.list_serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		company={
			't300_name': request.data['t300_name'],
			't300_rfc': request.data['t300_rfc'], 
			't300_bussiness_name': request.data['t300_bussiness_name'],
			't300_create_date': request.data['t300_create_date'],
			't300_verified': False
		}
		recruiter={
			"t301_name":request.data["t301_name"],
    		"t301_last_name":request.data["t301_last_name"],
    		"t301_email": request.data["t301_email"],    
    		"t301_phonenumber":request.data["t301_phonenumber"]
		}
		print(request.data)
		company_serializer = self.serializer_class(data=company)
		print(company_serializer.is_valid())
		if company_serializer.is_valid():
			company_serializer.save()
			recruiter_serializer = self.serializer_class(data=recruiter)
			if recruiter_serializer.is_valid():
				recruiter_serializer.save()
				return Response({
					'message': 'Compañia y reclutador registrados correctamente.',
					'succes': True
					}, status=status.HTTP_201_CREATED)
			else:
				return Response({
					'message': 'Compañia registrada.',
					'succes': False
					}, status=status.HTTP_400_BAD_REQUEST)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': company_serializer.errors,
			'succes': False 
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		company = self.get_object(pk)
		company_serializer = self.list_serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request, pk):
		u_company = self.model.objects.filter(t300_id_company = pk).first()
		company_serializer = UpdateCompanySerializer(u_company, data=request.data)
		if company_serializer.is_valid():
			company_serializer.save()
			return Response({
				'message': 'Compañia actualizada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': company_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		company_destroy = self.model.objects.filter(t300_id_company=pk).first()		
		if company_destroy:
			company_destroy = self.model.objects.filter(t300_id_company=pk).delete()
			return Response({
				'message': 'Compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)