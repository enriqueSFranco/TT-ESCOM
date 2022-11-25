from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, viewsets
from django.db.models import Count, IntegerField, OuterRef, Subquery,Max,Q
from itertools import chain
from datetime import date
from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Vacant,Application,Report
from apps.companies.models import Company
from apps.companies.api.serializer.statistics_serializer import CompanyStatisticsSerializer

class CompanyStatisticsViewSet(viewsets.GenericViewSet):
	model = Vacant
	list_serializer_class = CompanyStatisticsSerializer
	queryset = None

	def get_object(self, pk):			
		TotalPublished = Vacant.objects.filter(t300_id_company=pk).values('t300_id_company').annotate(TotalPublished=Count('t200_id_vacant'))
		TotalActive = Vacant.objects.filter(t300_id_company=pk,c204_id_vacant_status=2).values('t300_id_company').annotate(TotalActive=Count('t200_id_vacant'))
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk).all()\
				.annotate(TotalPublished=Subquery(TotalPublished.values('TotalPublished'),output_field=IntegerField()))\
				.annotate(TotalActive=Subquery(TotalActive.values('TotalActive'),output_field=IntegerField()))
		return self.queryset
	
	def get_queryset(self):        
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#.values('c205_id_application_state').annotate(total=Count('c205_id_application_state'))
		#TotalPublished = Vacant.objects.filter(t300_id_company=pk).values('t300_id_company').annotate(TotalPublished=Count('t200_id_vacant'))
		#TotalActive = Vacant.objects.filter(t300_id_company=pk,c204_id_vacant_status=2).values('t300_id_company').annotate(TotalActive=Count('t200_id_vacant'))
		#self.queryset = self.model.objects\
		#		.filter(t200_id_vacant = pk).all()\
		#		.annotate(TotalPublished=Subquery(TotalPublished.values('TotalPublished'),output_field=IntegerField()))\
		#		.annotate(TotalActive=Subquery(TotalActive.values('TotalActive'),output_field=IntegerField()))		
		return self.queryset

	def list(self, request):
		"""
		Clase generica para el registro de la ruta



		Dummy text
		""" 
		return Response({
				'message': 'Clase generica'
			})

	def retrieve(self, request, pk):
		"""
		Muestra el resumen del estado de una vacante publicada



		Dummy text
		""" 
		company_statistic = self.get_object(pk)
		print(company_statistic)
		statistic_serializer = self.list_serializer_class(company_statistic,many=True)
		return Response(statistic_serializer.data)
