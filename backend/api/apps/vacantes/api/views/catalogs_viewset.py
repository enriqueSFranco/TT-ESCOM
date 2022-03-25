from atexit import register
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import VacantStatus,CandidateProfile,Experience,ApplicationState,ReportType,ReportState
from apps.vacantes.api.serializers.catalogs_serializers import VacantStatusSerializer,VacantStatusListSerializer
from apps.vacantes.api.serializers.catalogs_serializers import CandidateProfileSerializer,CandidateProfileListSerializer
from apps.vacantes.api.serializers.catalogs_serializers import ExperienceSerializer,ExperienceListSerializer
from apps.vacantes.api.serializers.catalogs_serializers import ApplicationStateSerializer,ApplicationStateListSerializer
from apps.vacantes.api.serializers.catalogs_serializers import ReportTypeSerializer,ReportTypeListSerializer
from apps.vacantes.api.serializers.catalogs_serializers import ReportStateSerializer,ReportStateListSerializer

class VacantStatusViewSet(viewsets.GenericViewSet):
	model = VacantStatus
	serializer_class = VacantStatusSerializer
	list_serializer_class = VacantStatusListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c204_id_status','c204_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c204_id_status','c204_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)


class CandidateProfileViewSet(viewsets.GenericViewSet):
	model = CandidateProfile
	serializer_class = CandidateProfileSerializer
	list_serializer_class = CandidateProfileListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c206_id_profile','c206_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c206_id_profile','c206_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)



class ExperienceViewSet(viewsets.GenericViewSet):
	model = Experience
	serializer_class = ExperienceSerializer
	list_serializer_class = ExperienceListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c207_id_experience','c207_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c207_id_experience','c207_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)



class ApplicationStateViewSet(viewsets.GenericViewSet):
	model = ApplicationState
	serializer_class = ApplicationStateSerializer
	list_serializer_class = ApplicationStateListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c205_id_application_state','c205_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c205_id_application_state','c205_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)		



class ReportTypeViewSet(viewsets.GenericViewSet):
	model = ReportType
	serializer_class = ReportTypeSerializer
	list_serializer_class = ReportTypeListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c210_id_report_type','c210_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c210_id_report_type','c210_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)				



class ReportStateViewSet(viewsets.GenericViewSet):
	model = ReportState
	serializer_class = ReportStateSerializer
	list_serializer_class = ReportStateListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
				.values('c220_id_report_state','c220_description')
		return  self.queryset #get_object_or_404(self.model,pk=pk)
		
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('c220_id_report_state','c220_description')
		return self.queryset  

	def list(self, request):
		print(request.data)
		registers_list = self.get_queryset()
		registers_serializer = self.list_serializer_class(registers_list, many=True)
		return Response(registers_serializer.data, status=status.HTTP_200_OK)	

	def retrieve(self, request, pk):
		s_register = self.get_object(pk)
		register_serializer = self.list_serializer_class(s_register,many=True)
		return Response(register_serializer.data)	