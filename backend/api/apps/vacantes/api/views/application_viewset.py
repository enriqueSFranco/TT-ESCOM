from email.mime import application
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import Application
from apps.vacantes.api.serializers.application_serializer import ApplicationSerializer,ApplicationListSerializer,UpdateApplicationSerializer

class ApplicationViewSet(viewsets.GenericViewSet):
	model = Application
	serializer_class = ApplicationSerializer
	list_serializer_class = ApplicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t100_boleta = pk)\
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
		application_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if application_serializer.is_valid():
			application_serializer.save()
			return Response({
				'message': 'Aplicación registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
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
            u_application = self.model.objects.filter(t201_id_application=pk).first()
            application_serializer = UpdateApplicationSerializer(u_application, data=request.data)
            if application_serializer.is_valid():
                application_serializer.save()
                return Response({
				    'message': 'Comunicado actualizado correctamente'
			    }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Hay errores en la actualización',
                'errors': application_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
