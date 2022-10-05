from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from django.db.models import Count
from apps.companies.models import Company, Recruiter
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer
from apps.administration.api.serializer.data_serializer import CompanyDataSerializer
from apps.companies.api.serializer.company_serializer import CompanySerializer,CompanyListSerializer,UpdateCompanySerializer,VerifiedStateUpdate

class CompanyViewSet(viewsets.GenericViewSet): 
	"""
	Sin comentarios
	""" 	
	model = Company
	serializer_class = CompanySerializer
	list_serializer_class = CompanyListSerializer
	queryset = None

	RawQuery ="""SELECT COUNT(vac.t200_job) OnHoldVacants,
       			count(rec.t301_name) OnHoldRecruiters,
       			CMP.* 
			FROM t300_empresa CMP
			left JOIN t200_vacante VAC
			ON VAC.t300_id_company_id = CMP.t300_id_company AND vac.c204_id_vacant_status_id =1
			left JOIN t301_reclutador REC
			ON REC.t300_id_company_id = CMP.t300_id_company and REC.t301_user is null """
	QueryCondition = "where CMP.t300_id_company = "
	QueryGroup ="""	  group by CMP.t300_id_company,
    			CMP.t300_name,
    			CMP.t300_rfc,
    			CMP.t300_email,
    			CMP.t300_bussiness_name,
    			CMP.t300_web_page,
    			CMP.t300_mision,
    			CMP.t300_vision,
    			CMP.t300_objective,
    			CMP.t300_logo,
    			CMP.t300_banner,
    			CMP.t300_validator_document,
    			CMP.t400_id_admin_id,
    			CMP.t300_verified,
    			CMP.t300_create_date,
    			CMP.is_active """

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			Query = self.RawQuery + self.QueryCondition + pk + self.QueryGroup
			self.queryset = self.model.objects.raw(Query)
			#self.queryset = self.model.objects\
			#	.filter(t300_id_company = pk).all()\
			#	.filter(Vacant__to__c204_id_vacant_status).annotate(Count('c205_id_application_state'))	
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		"""
		Obtiene todos las compañias registradas en el sistema para los encargados



		Dummy text
		""" 	
		print(request.data)
		company = self.get_queryset()
		companies_serializer = CompanyDataSerializer(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):
		"""
		Obtiene la información de una compañia especifíca registrada en el sistema para los encargados



		Dummy text
		""" 	
		company = self.get_object(pk)
		company_serializer = self.list_serializer_class(company,many=True)
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
