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
			.filter(t100_boleta=pk)\
			.values('t100_boleta','t103_corporation','t103_employment','t103_description','t103_start_date','t103_end_date')
		return self.queryset#get_object_or_404(self.model,pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_boleta','t103_corporation','t103_employment','t103_description','t103_start_date')#,'t103_end_date')
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
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):        
		employment = self.get_object(pk)
		employments_serializer = self.list_serializer_class(employment,many=True)
		return Response(employments_serializer.data)

	def update(self, request, pk=None):
		employment = self.get_object(pk)
		employment_serializer = UpdateEmploymentSerializer(employment, data=request.data)
		if employment_serializer.is_valid():
			employment_serializer.save()
			return Response({
				'message': 'Historial laboral actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': employment_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		employment_destroy = self.model.objects.filter(t100_boleta=pk).delete()
        #SI lo borra pero no se como indicar que se realizo con exito
		if employment_destroy == 1:
			return Response({
				'message': 'Historial del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe Historial del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)