from atexit import register
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import AcademicLevel,AcademicState,AcademicUnit,InterestJob,Plataform,Skills,Language,ProjectType
from apps.students.api.serializer.catalogs_serializers import AcademicLevelSerializer,AcademicLevelListSerializer
from apps.students.api.serializer.catalogs_serializers import AcademicStateSerializer,AcademicStateListSerializer
from apps.students.api.serializer.catalogs_serializers import PlataformSerializer,PlataformListSerializer
from apps.students.api.serializer.catalogs_serializers import SkillsSerializer,SkillsListSerializer
from apps.students.api.serializer.catalogs_serializers import LanguageSerializer,LanguageListSerializer
from apps.students.api.serializer.catalogs_serializers import InterestJobSerializer,InsterestJobListSerializer
from apps.students.api.serializer.catalogs_serializers import AcademicUnitSerializer,AcademicUnitListSerializer
from apps.students.api.serializer.catalogs_serializers import  ProjectTypeListSerializer,ProjectTypeSerializer

class AcademicLevelViewSet(viewsets.GenericViewSet):
	model = AcademicLevel
	serializer_class = AcademicLevelSerializer
	list_serializer_class = AcademicLevelListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c107_id_academic_level = pk)\
				.values('c107_id_academic_level','c107_description')
		return  self.queryset
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c107_id_academic_level','c107_description')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de niveles académicos



		Dummy text
		""" 
		print(request.data)#---------------------------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de niveles académicos



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)


class AcademicStateViewSet(viewsets.GenericViewSet):
	model = AcademicState
	serializer_class = AcademicStateSerializer
	list_serializer_class = AcademicStateListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c109_id_academic_state = pk)\
				.values('c109_id_academic_state','c109_description')
		return  self.queryset
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c109_id_academic_state','c109_description')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de estado académico



		Dummy text
		""" 
		print(request.data)#------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra el elemento del catálogo de estado académico



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)



class PlataformViewSet(viewsets.GenericViewSet):
	model = Plataform
	serializer_class = PlataformSerializer
	list_serializer_class = PlataformListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c115_id_plataform = pk)\
				.values('c115_id_plataform','c115_description')
		return  self.queryset
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c115_id_plataform','c115_description')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de plataformas



		Dummy text
		""" 
		print(request.data)#-------------------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de plataformas



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)



class SkillsViewSet(viewsets.GenericViewSet):
	model = Skills
	serializer_class = SkillsSerializer
	list_serializer_class = SkillsListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c116_type = pk)\
				.values('c116_id_skill','c116_description','c116_type')
		return  self.queryset
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c116_id_skill','c116_description','c116_type')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de habilidades



		Dummy text
		""" 
		print(request.data)#-----------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de habilidades



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)		



class LanguageViewSet(viewsets.GenericViewSet):
	model = Language
	serializer_class = LanguageSerializer
	list_serializer_class = LanguageListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c111_id_lenguage = pk)\
				.all()
		return  self.queryset
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de idiomas



		Dummy text
		""" 
		print(request.data)#--------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de idiomas



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)				


class AcademicUnitViewSet(viewsets.GenericViewSet):
	model = AcademicUnit
	serializer_class = AcademicUnitSerializer
	list_serializer_class = AcademicUnitListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c108_id_academic_unit = pk)\
				.values('c108_id_academic_unit','c108_academic_unit')
		return  self.queryset 
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c108_id_academic_unit','c108_academic_unit')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de unidades académicas



		Dummy text
		""" 
		print(request.data)#--------------------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de unidades académicas



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)



class InterestJobViewSet(viewsets.GenericViewSet):
	model = InterestJob
	serializer_class = InterestJobSerializer
	list_serializer_class = InsterestJobListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c111_id_job = pk)\
				.values('c111_id_job','c111_job')
		return  self.queryset 
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c111_id_job','c111_job')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de puestos de interés



		Dummy text
		""" 
		print(request.data)#---------------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de puestos de interés



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)


class ProjectTypeViewSet(viewsets.GenericViewSet):
	model = ProjectType
	serializer_class = ProjectTypeSerializer
	list_serializer_class = ProjectTypeListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c118_id_type = pk)\
				.values('c118_id_type','c118_description')
		return  self.queryset 
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c118_id_type','c118_description')
		return self.queryset  

	def list(self, request):
		"""
		Muestra los elementos del catálogo de tipos de proyecto



		Dummy text
		""" 
		print(request.data)#--------------------------------------
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		"""
		Muestra un elemento del catálogo de tipos de proyecto



		Dummy text
		""" 
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)
