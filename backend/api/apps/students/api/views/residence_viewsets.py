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
		return get_object_or_404(self.model, pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_boleta', 't101_state', 't101_municipality', 't101_locality')
		return self.queryset

  # TODO terminar ruta para cambiar el password
	'''@action(detail=True, methods=['post'])
	def set_password(self, request, pk=None):
		student = self.get_object(pk)
		password_serializer = PasswordSerializer(data=request.data)
		if password_serializer.is_valid():
			student.set_password(
				password_serializer.validated_data['t100_password'])
			student.save()
			return Response({
				'message': 'Contraseña actualizada correctamente'
			})
		return Response({
			'message': 'Hay errores en la información enviada',
			'errors': password_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)'''

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
		residence_serializer = self.serializer_class(residence)
		return Response(residence_serializer.data)

	def update(self, request, pk=None):
		residence = self.get_object(pk)
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

	def destroy(self, request, pk=None):
		student_destroy = self.model.objects.filter(id=pk).update(is_active=False)
		if student_destroy == 1:
			return Response({
				'message': 'Residencia del alumno eliminada correctamente'
			})
		return Response({
			'message': 'No existe la residencia del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


