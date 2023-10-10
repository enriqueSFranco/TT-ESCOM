from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import AcademicHistory
from apps.students.api.serializer.academichistory_serializer import AcademicHistorySerializer,AcademicHistoryListSerializer,UpdateAcademicHistorySerializer

class HistorialViewSet(viewsets.GenericViewSet):
	model = AcademicHistory
	serializer_class = AcademicHistorySerializer
	list_serializer_class = AcademicHistoryListSerializer
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
		Muestra el historial academico de todos los candidatos registrados



		Dummy text
		""" 
		print(request.data)#----------------------------------------------	
		historial = self.get_queryset()
		historials_serializer = self.list_serializer_class(historial, many=True)
		return Response(historials_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		"""
		Agrega un registro de historial academico a un candidato



		Dummy text
		""" 
		print(request.data)#-----------------------------------------	
		historial_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if historial_serializer.is_valid():
			historial_serializer.save()
			return Response({
				'message': 'Historial del alumno registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': historial_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra el historial academico de un candidato



		Dummy text
		""" 
		print(request.data)#--------------------------------------	
		historial = self.get_object(pk)
		historial_serializer = self.list_serializer_class(historial,many=True)
		return Response(historial_serializer.data)

	def update(self, request, pk):
		"""
		Actualiza un registro del historial academico de un candidato



		Dummy text
		""" 
		print(request.data)#-----------------------------------------	
		historial = self.model.objects.filter(t104_id_registrer = pk).first()
		historial_serializer = UpdateAcademicHistorySerializer(historial, data=request.data)
		if historial_serializer.is_valid():
			historial_serializer.save()
			return Response({
				'message': 'Historial del alumno actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': historial_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		"""
		Elimina un registro del historial academico de un candidato



		Dummy text
		""" 
		print(request.data)#----------------------------------------------	
		historial_destroy = self.model.objects.filter(t104_id_registrer=pk).first()
		print(historial_destroy)
		if historial_destroy:
			historial_destroy = self.model.objects.filter(t104_id_registrer=pk).delete()
			return Response({
				'message': 'Historial Academico del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe Historial del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)