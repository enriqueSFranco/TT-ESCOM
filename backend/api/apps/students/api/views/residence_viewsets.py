from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import residence
from apps.students.api.serializer.residence_serializer import ResidenceSerializer,ResidenceListSerializer,UpdateResidenceSerializer


class StudentResidenceViewSet(viewsets.GenericViewSet):
	model = residence
	serializer_class = ResidenceSerializer
	list_serializer_class = ResidenceListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset = self.model.objects\
			.filter(t100_boleta=pk)\
			.values('t100_boleta', 't101_state', 't101_municipality', 't101_locality')
		return self.queryset #get_object_or_404(self.model, pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_boleta', 't101_state', 't101_municipality', 't101_locality')
		return self.queryset
  
	def list(self, request):
		residence = self.get_queryset()
		residence_serializer = self.list_serializer_class(residence, many=True)
		return Response(residence_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		residence_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if residence_serializer.is_valid():
			residence_serializer.save()
			return Response({
				'message': 'Residencia del alumno registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': residence_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		residence = self.get_object(pk)
		residence_serializer = self.list_serializer_class(residence,many=True)
		return Response(residence_serializer.data)

	def update(self, request, pk=None):
		residence = self.model.objects.filter(t100_boleta=pk).first()
		residence_serializer = UpdateResidenceSerializer(residence, data=request.data)
		if residence_serializer.is_valid():
			residence_serializer.save()
			return Response({
				'message': 'Alumno actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': residence_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		student_destroy = self.model.objects.filter(t100_boleta=pk).delete()
		#SI lo borra pero no se como indicar que se realizo con exito
		if student_destroy == 1:
			return Response({
				'message': 'Residencia del alumno eliminada correctamente'
			})
		return Response({
			'message': 'No existe la residencia del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


