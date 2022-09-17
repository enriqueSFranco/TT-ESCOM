from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, viewsets
from django.db.models import Count,Max

from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Vacant,Application,Requirement
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
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def create(self, request):
		vacant_requirements = []
		vacant_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		print('request: ',request.data['requirements'])
		if vacant_serializer.is_valid():
			vacant_serializer.save()
			vacant_requirements = request.data['requirements']
			n_vacant = self.model.objects.aggregate(Max('t200_id_vacant'))
			id_vacant = n_vacant['t200_id_vacant__max']
			print(id_vacant)
			if vacant_requirements:
				for requirement in vacant_requirements:
					requirement['t200_id_vacant'] = id_vacant
					requirement['c116_id_skill']= requirement['skill']['c116_id_skill']
					print(requirement)
					requirement_serializer = self.requirement_serializer(data=requirement)
					if requirement_serializer.is_valid():
						requirement_serializer.save()
					else:
						print (requirement_serializer.errors)
			return Response({
				'message': 'Vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': vacant_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
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


#class VacantRequirementsViewSet(viewsets.GenericViewSet):
#	model = Requirement
#	#permission_classes = [IsAuthenticated]
#	serializer_class = VacantRequirementSerializer
#	list_serializer_class = VacantRequirementListSerializer
#	queryset = None
#
#	def get_object(self, pk):	
#		self.queryset = self.model.objects\
#				.filter(t200_id_vacant = pk)\
#				.all()
#		return self.queryset
#	
#	def get_queryset(self):
#		if self.queryset is None:
#			self.queryset = self.model.objects\
#				.filter()\
#				.all()
#		return self.queryset
#
#	def list(self, request):
#		requirements = self.get_queryset()				
#		requirements_serializer = self.list_serializer_class(requirements, many=True)
#		return Response(requirements_serializer.data, status=status.HTTP_200_OK)	
#
#	def create(self, request):
#		requirement_serializer = self.serializer_class(data=request.data)
#		print('request: ',request.data)
#		if requirement_serializer.is_valid():
#			requirement_serializer.save()
#			return Response({
#				'message': 'Habilidad registrada correctamente.'
#			}, status=status.HTTP_201_CREATED)
#		return Response({
#			'message': 'Hay errores en el registro',
#			'errors': requirement_serializer.errors
#		}, status=status.HTTP_400_BAD_REQUEST)
#
#	def retrieve(self, request, pk):
#		requirement = self.get_object(pk)
#		requirement_serializer = self.list_serializer_class(requirement,many=True)
#		return Response(requirement_serializer.data)
#
#	def destroy(self, request, pk=None):
#		requirement_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
#		if requirement_destroy :
#			requirement_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
#			return Response({
#				'message': 'Requerimiento eliminado correctamente'
#			}, status=status.HTTP_200_OK)
#		return Response({
#			'message': 'No existe el requerimiento que desea eliminar'
#		}, status=status.HTTP_404_NOT_FOUND)
	

#class VacantLenguagesViewSet(viewsets.GenericViewSet):
#	model = LenguageRequired
#	#permission_classes = [IsAuthenticated]
#	serializer_class = VacantLenguageSerializer
#	list_serializer_class = VacantLenguageListSerializer
#	queryset = None
#
#	def get_object(self, pk):	
#		self.queryset = self.model.objects\
#				.filter(t200_id_vacant = pk)\
#				.all()
#		return self.queryset
#	
#	def get_queryset(self):
#		if self.queryset is None:
#			self.queryset = self.model.objects\
#				.filter()\
#				.all()
#		return self.queryset
#
#	def list(self, request):
#		lenguages = self.get_queryset()				
#		lenguages_serializer = self.list_serializer_class(lenguages, many=True)
#		return Response(lenguages_serializer.data, status=status.HTTP_200_OK)	
#
#	def create(self, request):
#		lenguage_serializer = self.serializer_class(data=request.data)
#		print('request: ',request.data)
#		if lenguage_serializer.is_valid():
#			lenguage_serializer.save()
#			return Response({
#				'message': 'Idioma registrada correctamente.'
#			}, status=status.HTTP_201_CREATED)
#		return Response({
#			'message': 'Hay errores en el registro',
#			'errors': lenguage_serializer.errors
#		}, status=status.HTTP_400_BAD_REQUEST)
#
#	def retrieve(self, request, pk):
#		lenguages = self.get_object(pk)
#		lenguages_serializer = self.list_serializer_class(lenguages,many=True)
#		return Response(lenguages_serializer.data)
#
#	def destroy(self, request, pk=None):
#		lenguage_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
#		if lenguage_destroy :
#			lenguage_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
#			return Response({
#				'message': 'Idioma eliminado correctamente'
#			}, status=status.HTTP_200_OK)
#		return Response({
#			'message': 'No existe el idioma que desea eliminar'
#		}, status=status.HTTP_404_NOT_FOUND)



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
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def retrieve(self, request, pk):
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)


class VacantInfoViewSet(viewsets.GenericViewSet):
	model = Application
	list_serializer_class = VacantInfoListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all().values('c205_id_application_state').annotate(total=Count('c205_id_application_state'))
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all().values('c205_id_application_state').annotate(total=Count('c205_id_application_state'))
		return self.queryset

	def list(self, request):
		vacants = self.get_queryset()
		print(vacants)
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return Response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def retrieve(self, request, pk):
		Vacant = self.get_object(pk)
		print(Vacant)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)			

class FilterVacant(viewsets.GenericViewSet):
	queryset = Vacant.objects.all()
	serializer_class = VacantListSerializer

	def list(self, request,search):
		vacants = Vacant.objects.filter(t200_job__startswith=search)
		vacants_serializer = self.serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def retrieve(self, request, search):
		Vacant = Vacant.objects.filter(t200_job=search)
		vacant_serializer = self.serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)		
	

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
		