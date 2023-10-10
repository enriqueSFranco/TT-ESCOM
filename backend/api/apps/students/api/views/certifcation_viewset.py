from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import Certifications
from apps.students.api.serializer.cerification_serializer import CertificationsSerializer,CertificationsListSerializer,UpdateCertificationsSerializer

class CertificationViewSet(viewsets.GenericViewSet):
	model = Certifications
	serializer_class = CertificationsSerializer
	list_serializer_class = CertificationsListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_id_student = pk)\
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
		Muestra las certificaciones de todos los candiatos registrados



		Dummy text
		""" 
		print(request.data)#----------------------------------
		historial = self.get_queryset()
		historials_serializer = self.list_serializer_class(historial, many=True)
		return Response(historials_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		"""
		Crea un registro de certificación para un candidato



		Dummy text
		""" 
		print(request.data)#------------------------------------
		certification_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if certification_serializer.is_valid():
			certification_serializer.save()
			return Response({
				'message': 'Certificación registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': certification_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra las certificaciones de un candidato



		Dummy text
		""" 
		print(request.data)#-----------------------------------
		certification = self.get_object(pk)
		certification_serializer = self.list_serializer_class(certification,many=True)
		return Response(certification_serializer.data)

	def update(self, request, pk):
		"""
		Actualiza un registro de certificación de un candidato



		Dummy text
		""" 
		print(request.data)#----------------------------------------
		certification = self.model.objects.filter(t119_id_registrer = pk).first()
		certification_serializer = UpdateCertificationsSerializer(certification, data=request.data)
		if certification_serializer.is_valid():
			certification_serializer.save()
			return Response({
				'message': 'Certificación del alumno actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': certification_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		"""
		Elimina un registro de certificación de un candidato



		Dummy text
		""" 
		print(request.data)#---------------------------------------------
		certification_destroy = self.model.objects.filter(t119_id_registrer=pk).first()
		print(certification_destroy)
		if certification_destroy:
			certification_destroy = self.model.objects.filter(t119_id_registrer=pk).delete()
			return Response({
				'message': 'Certificación del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe certificación del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)