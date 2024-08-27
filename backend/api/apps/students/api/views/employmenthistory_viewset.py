from pickle import NONE
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import EmploymentHistory
from apps.students.api.serializer.employmenthistory_serializer import EmploymentSerializer,EmploymentListSerializer,UpdateEmploymentSerializer

class EmploymentViewSet(viewsets.GenericViewSet):
	model = EmploymentHistory
	serializer_class = EmploymentSerializer
	list_serializer_class = EmploymentListSerializer
	queryset = None

	def get_object(self, pk):        		  
		self.queryset = self.model.objects\
			.filter(t100_id_student=pk)\
			.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		employments = self.get_queryset()
		employments_serializer = self.list_serializer_class(employments, many=True)
		return Response(employments_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		employment_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if employment_serializer.is_valid():
			employment_serializer.save()
			return Response({
				'message': 'Historial laboral registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': employment_serializer.errors
		}, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):        
		employment = self.get_object(pk)
		employments_serializer = self.list_serializer_class(employment,many=True)
		return Response(employments_serializer.data)

	def update(self, request, pk):
		print(request.data)		
		employment = self.model.objects.filter(t103_id_registrer=pk).first()
		employment_serializer = UpdateEmploymentSerializer(employment, data=request.data)
		if employment_serializer.is_valid():
			employment_serializer.save()
			return Response({
				'message': 'Historial laboral actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': employment_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		print(request.data)		
		employment_destroy = self.model.objects.filter(t103_id_registrer=pk).first()
		if employment_destroy:
			employment_destroy = self.model.objects.filter(t103_id_registrer=pk).delete()
			return Response({
				'message': 'Historial del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe Historial del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)