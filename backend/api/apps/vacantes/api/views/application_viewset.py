from django.shortcuts import get_object_or_404
from django.db.models import Max
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from datetime import datetime

from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Application, ApplicationState,Vacant
from apps.vacantes.api.serializers.vacant_serializer import UpdateVacantStateSerializer
from apps.vacantes.api.serializers.application_serializer import ApplicationSerializer,ApplicationListSerializer,UpdateApplicationSerializer,ApplicationStateSerializer,ApplicationStateListSerializer

class ApplicationViewSet(viewsets.GenericViewSet):
	model = Application
	vacant_model = Vacant
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
		print(request,request.data)####depurar
		status_data ={
			"t201_id_application":"",
			"c205_id_application_state":1,
			"t216_modify_date":request.data['t201_date_application']
		}
		check_applications = self.model.objects.filter(t200_id_vacant=request.data['t200_id_vacant'],
													   t100_id_student=request.data['t100_id_student'],
													   c205_id_application_state__in=['1','2','4'])
		#print("Postulacion activa ?",check_applications)
		if (check_applications):
			print("Ya hay una postulación activa")
			return Response({'message': 'Ya hay una postulación activa'
								}, status=status.HTTP_200_OK)

		application_serializer = self.serializer_class(data=request.data)
		#print('request: ',request.data['t201_date_application'])  HTTP_200_OK
		if application_serializer.is_valid():
			application_serializer.save()
			application = self.model.objects.aggregate(Max('t201_id_application'))
			print(application)
			id_application = application['t201_id_application__max']
			status_data['t201_id_application'] = id_application				
			print(status_data)
			application_status = self.status_serializer(data=status_data)
			if application_status.is_valid():				
				application_status.save()
				return Response({
					'message': 'Aplicación registrada correctamente.'
					}, status=status.HTTP_201_CREATED)
		return Response({
					'message': 'Hay errores en el registro',
					'errors': application_serializer.errors
					}, status=status.HTTP_200_OK)

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
			"t201_id_application":pk,
			"c205_id_application_state":request.data['c205_id_application_state'],
			"t216_modify_date": datetime.now().date()
		}
		update_data = {
			"c205_id_application_state":request.data['c205_id_application_state']
		}
		u_application = self.model.objects.filter(t201_id_application=pk).first()
		print(u_application)
		#status_data['t201_id_application'] = u_application.t201_id_application
		print(status_data)
		application_serializer = UpdateApplicationSerializer(u_application, data=update_data)
		application_status = self.status_serializer(data=status_data)
		#algo = ApplicationStateSerializer
		if application_serializer.is_valid() and application_status.is_valid(): 
			application_status.save()
			application_serializer.save()
			self.updateVacant(u_application.t200_id_vacant.t200_id_vacant)
			return Response({
			    'message': 'Postulación actualizado correctamente'
				}, status=status.HTTP_200_OK)
		return Response({
            'message': 'Hay errores en la actualización',
            'errors': application_serializer.errors
            }, status=status.HTTP_200_OK)

	def updateVacant(self,id_vacant):
		vacant = self.vacant_model.objects.filter(t200_id_vacant = id_vacant).first()
		applications = self.model.objects.filter(t200_id_vacant = id_vacant, c205_id_application_state = 4)
		print(vacant)
		print(applications.count())
		if (vacant.t200_vacancy == applications.count()):
			#UpdateVacantStateSerializer
			application_serializer = UpdateVacantStateSerializer(vacant, data={"c204_id_vacant_status":"2"})
			if application_serializer.is_valid():
				application_serializer.save()
			print("Ya se lleno la vacante, es hora de cerrarla XDxddd")


class VacantApplicationsViewSet(viewsets.GenericViewSet):
	model = Application
	pagination_class = CustomPagination
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
	pagination_class = CustomPagination
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
		page = self.paginate_queryset(applications)
		if page is not None:
			applications_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(applications_serializer.data)
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)
		
	def retrieve(self, request, pk):
		applications = self.get_object(pk)
		page = self.paginate_queryset(applications)
		if page is not None:
			applications_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(applications_serializer.data)
		applications_serializer = self.list_serializer_class(applications,many=True)
		return Response(applications_serializer.data)

