from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from django.db.models import Count, IntegerField, OuterRef, Subquery, Sum, Q
from apps.companies.models import Company, Recruiter
from apps.vacantes.models import Vacant,Report
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer
from apps.administration.api.serializer.data_serializer import CompanySerializer,CompanyDataSerializer,CompanyListSerializer,CompanyRetriveSerializer
from apps.companies.api.serializer.company_serializer import UpdateCompanySerializer,VerifiedStateUpdate

class ManagerViewCompanyViewSet(viewsets.GenericViewSet): 
	"""
	Sin comentarios
	""" 	
	model = Company
	serializer_class = CompanySerializer	
	list_serializer_class = CompanyListSerializer
	queryset = None
	

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			CompanyVacants = Vacant.objects.filter(t300_id_company=pk).values('t300_id_company').annotate(TotalVacants=Count('t200_id_vacant'))
			#OnHoldCompanyRecruiters =Recruiter.objects.filter(t300_id_company=pk,c303_id_status=2).values('t300_id_company').annotate(OnHoldRecruiters=Count('t301_id_recruiter'))
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk).all()\
				.annotate(TotalVacants=Subquery(CompanyVacants.values('TotalVacants'), output_field=IntegerField()))#\
				#.annotate(OnHoldRecruiters=Subquery(OnHoldCompanyRecruiters.values('OnHoldRecruiters'), output_field=IntegerField()))
		return  self.queryset

 
	def get_queryset(self):
		if self.queryset is None:
			OnHoldCompanyVacants = Vacant.objects.filter(t300_id_company=OuterRef('t300_id_company'),c204_id_vacant_status=1).values('t300_id_company').annotate(OnHoldVacants=Count('t200_id_vacant'))
			OnHoldCompanyRecruiters =Recruiter.objects.filter(t300_id_company=OuterRef('t300_id_company'),c303_id_status=2).values('t300_id_company').annotate(OnHoldRecruiters=Count('t301_id_recruiter'))
			self.queryset = self.model.objects.all()\
				.annotate(OnHoldVacants=Subquery(OnHoldCompanyVacants.values('OnHoldVacants'), output_field=IntegerField()))\
				.annotate(OnHoldRecruiters=Subquery(OnHoldCompanyRecruiters.values('OnHoldRecruiters'), output_field=IntegerField()))
		return self.queryset
  

	def list(self, request):
		"""
		Obtiene todos las compañias registradas en el sistema para los encargados



		Dummy text
		""" 	
		print(request.data)
		company = self.get_queryset()
		companies_serializer = self.list_serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):
		"""
		Obtiene la información de una compañia especifíca registrada en el sistema para los encargados



		Dummy text
		""" 	
		company = self.get_object(pk)
		company_serializer = CompanyRetriveSerializer(company,many=True)
		return Response(company_serializer.data)

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
