from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
import base64 
import os
from django.core.files import File 
from apps.students.models import Student
from apps.students.api.serializer.files_serializer import StudentImageSerializer,CVSerializer

class StudentImageViewSet(viewsets.GenericViewSet):
	model = Student
	serializer_class = StudentImageSerializer	
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
		print(request.data)
		student_image = self.get_queryset()
		image_serializer = self.serializer_class(student_image, many=True)
		return Response(image_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		student_image = self.get_object(pk)
		image_serializer = self.serializer_class(student_image,many=True)
		return Response(image_serializer.data)		

	def update(self, request, pk):		
		#print(request.data)
		u_image = self.model.objects.filter(t100_id_student = pk).first()
		image_serializer = self.serializer_class(u_image, data=request.data)
		if image_serializer.is_valid():
			image_serializer.save()	
			return Response({
				'message': 'Imagen de perfil actualizada correctamente'
			}, status=status.HTTP_200_OK)		
		return Response({
			'message': 'Error en la actualización'
		}, status=status.HTTP_200_OK)


	def destroy(self, request, pk):
		image_destroy = self.model.objects.filter(t100_id_student=pk).first()				
		if image_destroy:
			image_destroy = self.model.objects.filter(t100_id_student=pk).update(t100_profile_picture="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'Foto de perfil eliminada correctamente'
			})
		return Response({
			'message': 'No existe imagen de perfil que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


class CVViewSet(viewsets.GenericViewSet):
	model = Student
	serializer_class = CVSerializer
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
		print(request.data)
		student_cv = self.get_queryset()
		image_serializer = self.serializer_class(student_cv, many=True)
		return Response(image_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		student_cv = self.get_object(pk)
		cv_serializer = self.serializer_class(student_cv,many=True)
		return Response(cv_serializer.data)
	

	def update(self, request, pk):
		print(request.data)
		u_cv = self.model.objects.filter(t100_id_student = pk).first()
		cv_serializer = self.serializer_class(u_cv, data=request.data)
		if cv_serializer.is_valid():
			cv_serializer.save()
			return Response({
				'message': 'CV actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': cv_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		cv_destroy = self.model.objects.filter(t100_id_student=pk).first()				
		if cv_destroy:
			cv_destroy = self.model.objects.filter(t100_id_student=pk).update(t100_cv="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'CV eliminado correctamente'
			})
		return Response({
			'message': 'No existe cv que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)