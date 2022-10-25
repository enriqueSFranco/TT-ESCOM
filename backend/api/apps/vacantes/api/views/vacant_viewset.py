from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, viewsets
from django.db.models import Count, IntegerField, OuterRef, Subquery,Max,Q
from itertools import chain
from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Vacant,Application,Report
from apps.companies.models import Company
from apps.vacantes.api.serializers.vacant_serializer import VacantSerializer,VacantListSerializer,UpdateVacantSerializer,VacantInfoListSerializer,VacantRequirementSerializer,VacantRequirementListSerializer,VacantFilterSerializer

class VacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	#permission_classes = [IsAuthenticated]
	serializer_class = VacantSerializer
	requirement_serializer = VacantRequirementSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset

	def list(self, request):
		"""
		Muestra todas las vacantes activas en la plataforma



		Dummy text
		""" 
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def create(self, request):
		"""
		Agrega una vacante al sistema



		Dummy text
		""" 
		vacant_requirements = []
		vacant_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		print('request: ',request.data['requirements'])
		if vacant_serializer.is_valid():
			vacant_serializer.save()			
			return Response({
				'message': 'Vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': vacant_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra la información de una sola vacante



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
		"""
		Elimina una vacante



		Dummy text
		""" 
		vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
		if vacant_destroy :
			vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Vacante eliminada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'No existe la vacante que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
		"""
		Actualiza la información de una vacante



		Dummy text
		""" 
		vacant = self.queryset = self.model.objects.filter(t200_id_vacant = pk).first()
		vacant_serializer = UpdateVacantSerializer(vacant, data=request.data)
		if vacant_serializer.is_valid():
			vacant_serializer.save()
			return Response({
			    'message': 'Vacante actualizada correctamente'
		    }, status=status.HTTP_200_OK)
		return Response({
            'message': 'Hay errores en la actualización',
            'errors': vacant_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)



class RecruiterVacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	#permission_classes = [IsAuthenticated]
	serializer_class = VacantSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t301_id_recruiter = pk)\
				.all().order_by('c204_id_vacant_status')
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all().order_by('c204_id_vacant_status')
		return self.queryset

	def list(self, request):
		"""
		Muestra las vacantes publicadas por un reclutador



		Dummy text
		""" 
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def retrieve(self, request, pk):
		"""
		Muestra una vacante publicada por un reclutador



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)


class VacantInfoViewSet(viewsets.GenericViewSet):
	model = Vacant
	list_serializer_class = VacantInfoListSerializer
	queryset = None

	def get_object(self, pk):			
		Recieved = Application.objects.filter(t200_id_vacant=pk).values('t200_id_vacant').annotate(TotalReceived=Count('t200_id_vacant'))
		Hired = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=4).values('t200_id_vacant').annotate(TotalHired=Count('t200_id_vacant'))
		OnTrack = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=2).values('t200_id_vacant').annotate(TotalOnTrack=Count('t200_id_vacant'))
		Discarted = Application.objects.filter(Q(t200_id_vacant=pk),Q(c205_id_application_state=3)|Q(c205_id_application_state=5)).values('t200_id_vacant').annotate(TotalDiscarted=Count('t200_id_vacant'))
		Unseen = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=1).values('t200_id_vacant').annotate(TotalUnseen=Count('t200_id_vacant'))
		Reports = Report.objects.filter(t200_id_vacant=pk).values('t200_id_vacant').annotate(TotalReports=Count('t200_id_vacant'))
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk).all()\
				.annotate(TotalHired=Subquery(Hired.values('TotalHired'),output_field=IntegerField()))\
				.annotate(TotalOnTrack=Subquery(OnTrack.values('TotalOnTrack'),output_field=IntegerField()))\
				.annotate(TotalDiscarted=Subquery(Discarted.values('TotalDiscarted'),output_field=IntegerField()))\
				.annotate(TotalReceived=Subquery(Recieved.values('TotalReceived'),output_field=IntegerField()))\
				.annotate(TotalUnseen=Subquery(Unseen.values('TotalUnseen'),output_field=IntegerField()))\
				.annotate(TotalReports=Subquery(Reports.values('TotalReports'),output_field=IntegerField()))				
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#.values('c205_id_application_state').annotate(total=Count('c205_id_application_state'))
		return self.queryset

	def list(self, request):
		"""
		Clase generica para el registro de la ruta



		Dummy text
		""" 
		#vacants = self.get_queryset()
		#print(vacants)
		#page = self.paginate_queryset(vacants)
		#if page is not None:
		#	vacants_serializer = self.list_serializer_class(page, many=True)
		#	return Response(vacants_serializer.data)
		#vacants_serializer = self.list_serializer_class(vacants, many=True)
		#return Response(vacants_serializer.data)
		return Response({
				'message': 'No hay nada que ver aqui'
			})

	def retrieve(self, request, pk):
		"""
		Muestra el resumen del estado de una vacante publicada



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		print(Vacant)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)			

class FilterVacant (generics.ListAPIView):
	serializer_class = VacantFilterSerializer
	characters = "'?,.¿&"

	def get_queryset(self):		
		search_str = self.kwargs['search']		
		for x in range(len(self.characters)):
			search_str = search_str.replace(self.characters[x],"")
		search = search_str.split(" ")
		print(search)		
		count =0
		for word in search:
			if count==0:
				filter = Vacant.objects.filter(Q(c204_id_vacant_status = 1),Q(t200_job__icontains=word) | Q(t200_description__icontains=word))
				count = count+1
			else:
				print(word)
				filter = filter.union(Vacant.objects.filter(Q(c204_id_vacant_status = 1),Q(t200_job__icontains=word) | Q(t200_description__icontains=word)))
		return filter.values()#Vacant.objects.filter(Q(c204_id_vacant_status = 1),Q(t200_job__icontains=search) | Q(t200_description__icontains=search)).values() 
	

class FilterVacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	serializer_class = VacantSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None
	filters ={
		'job' : '',
		'company_name' : '',
		'id_profile' : '',
		'id_modality' : '',
	}
	def get_company(self,company_name):
		company_data = Company.objects.filter(t300_name=company_name)
		return company_data[0].t300_id_company

	def get_object(self):	
		self.queryset = self.model.objects.filter(c204_id_vacant_status_id = 1)
		if (self.filters['job']):
			self.queryset = self.queryset.filter(t200_job__icontains= self.filters['job'])
		if (self.filters['company_name']):
			company_id = self.get_company(self.filters['company_name'])
			self.queryset = self.queryset.filter(t300_id_company = company_id)
		if (self.filters['id_profile']):
			self.queryset = self.queryset.filter(c206_id_profile = self.filters['id_profile'])
		if (self.filters['id_modality']):
			self.queryset = self.queryset.filter(c214_id_modality = self.filters['id_modality'])
		self.queryset =	self.queryset.all()
		return self.queryset

	def get_queryset(self):	
		self.queryset = self.model.objects.filter(c204_id_vacant_status_id = 1)
		if (self.filters['job']):
			self.queryset = self.queryset.filter(t200_job__icontains= self.filters['job'])
		if (self.filters['company_name']):
			company_id = self.get_company(self.filters['company_name'])
			self.queryset = self.queryset.filter(t300_id_company = company_id)
		if (self.filters['id_profile']):
			self.queryset = self.queryset.filter(c206_id_profile = self.filters['id_profile'])
		if (self.filters['id_modality']):
			self.queryset = self.queryset.filter(c214_id_modality = self.filters['id_modality'])
		self.queryset =	self.queryset.all()
		return self.queryset

	def list(self, request):
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)


	def create(self, request):
		print('request: ',request.data)
		self.filters['job'] = request.data['job']
		self.filters['company_name'] = request.data['company_name']
		self.filters['id_profile'] = request.data['c206_id_profile']
		self.filters['id_modality']  = request.data['id_modality']
		print(self.filters)
		vacants = self.get_object()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)		
		