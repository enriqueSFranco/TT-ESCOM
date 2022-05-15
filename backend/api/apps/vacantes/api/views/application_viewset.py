from email.mime import application
from django.shortcuts import get_object_or_404
from django.db.models import Max
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from datetime import datetime

from apps.vacantes.models import Application, ApplicationState
from apps.vacantes.api.serializers.application_serializer import ApplicationSerializer,ApplicationListSerializer,UpdateApplicationSerializer,ApplicationStateSerializer,ApplicationStateListSerializer

class ApplicationViewSet(viewsets.GenericViewSet):
	model = Application
	status_model = ApplicationState
	status_serializer = ApplicationStateSerializer
	status_list_serializer = ApplicationListSerializer
	serializer_class = ApplicationSerializer
	list_serializer_class = ApplicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t201_id_application = pk)\
				.all()#values('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application','t201_cv')		
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application','t201_cv')
		return self.queryset


	def list(self, request):
        #print(request.data)
		applications = self.get_queryset()
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		status_data ={
			"t201_id_application":"",
			"c205_id_application_state":1,
			"t216_modify_date":request.data['t201_date_application']
		}
		check_applications = self.model.objects.filter(t200_id_vacant=request.data['t200_id_vacant'],t100_id_student=request.data['t100_id_student'],c205_id_application_state__in=['1','2','4'])
		print(check_applications)
		if (check_applications):
			print("Ya hay una postulación activa")
			return Response({
			'message': 'Ya hay una postulación activa'
		}, status=status.HTTP_400_BAD_REQUEST)

		application_serializer = self.serializer_class(data=request.data)
		#print('request: ',request.data['t201_date_application'])
		if application_serializer.is_valid():
			
			application = self.model.objects.aggregate(Max('t201_id_application'))
			print(application)
			if (application):
				id_application = application['t201_id_application__max']
			else:
				id_application ="1"			
			status_data['t201_id_application'] = id_application				
			print(status_data)
			application_status = self.status_serializer(data=status_data)
			if application_status.is_valid():
				application_serializer.save()
				application_status.save()
				return Response({
					'message': 'Aplicación registrada correctamente.',
					'type':1
					}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'type':3,
			'errors': application_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		applications = self.get_object(pk)
		applications_serializer = self.list_serializer_class(applications,many=True)
		return Response(applications_serializer.data)

	def destroy(self, request, pk):
		applicaction_destroy = self.model.objects.filter(t201_id_application=pk).first()		
		if applicaction_destroy:
			applicaction_destroy = self.model.objects.filter(t201_id_application=pk).delete()
			return Response({
				'message': 'Aplicación eliminado correctamente'
			})
		return Response({
			'message': 'No existe la aplicación que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
		status_data ={
			"t201_id_application":"",
			"c205_id_application_state":1,
			"t216_modify_date": datetime.now().date()
		}
		u_application = self.model.objects.filter(t201_id_application=pk).first()
		application_serializer = UpdateApplicationSerializer(u_application, data=request.data)
		if application_serializer.is_valid():
			application_serializer.save()
			return Response({
			    'message': 'Postulación actualizado correctamente'
				}, status=status.HTTP_200_OK)
		return Response({
            'message': 'Hay errores en la actualización',
            'errors': application_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


class VacantApplicationsViewSet(viewsets.GenericViewSet):
	model = Application
	serializer_class = ApplicationSerializer
	list_serializer_class = ApplicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk, c205_id_application_state__in=['1','2','4'])\
				.all()#values('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application','t201_cv')		
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application','t201_cv')
		return self.queryset


	def list(self, request):
        #print(request.data)
		applications = self.get_queryset()
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)
		
	def retrieve(self, request, pk):
		applications = self.get_object(pk)
		applications_serializer = self.list_serializer_class(applications,many=True)
		return Response(applications_serializer.data)


class StudentApplicationsViewSet(viewsets.GenericViewSet):
	model = Application
	serializer_class = ApplicationSerializer
	list_serializer_class = ApplicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t100_id_student = pk)\
				.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def list(self, request):
        #print(request.data)
		applications = self.get_queryset()
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)
		
	def retrieve(self, request, pk):
		applications = self.get_object(pk)
		applications_serializer = self.list_serializer_class(applications,many=True)
		return Response(applications_serializer.data)

