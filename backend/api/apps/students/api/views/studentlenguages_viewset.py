from pickle import NONE
from re import S
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import StudentLenguage
from apps.students.api.serializer.studentlenguage_serializer import LenguagesSerializer,LenguagesListSerializer,UpdateLenguagesSerializer

class LenguagesViewSet(viewsets.GenericViewSet):
	model = StudentLenguage
	serializer_class = LenguagesSerializer
	list_serializer_class = LenguagesListSerializer
	queryset = None

	def get_object(self, pk):        		          
		self.queryset = self.model.objects\
			.filter(t100_boleta=pk)\
			.all()
			#values('t110_id_registrer','t100_boleta','t110_written_level','t110_reading_level','t110_speaking_level','t110_comprension_level','t110_native','c111_id_language','c111_id_language_id')
		return self.queryset#get_object_or_404(self.model,pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t110_id_registrer','t100_boleta','t110_written_level','t110_reading_level','t110_speaking_level','t110_comprension_level','t110_native','c111_id_language','c111_id_language_id')				
		return self.queryset
  

	def list(self, request):
		lenguages = self.get_queryset()
		lenguages_serializer = self.list_serializer_class(lenguages, many=True)
		return Response(lenguages_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		lenguage_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if lenguage_serializer.is_valid():
			lenguage_serializer.save()
			return Response({
				'message': 'Registro de idioma registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': lenguage_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):        
		lenguage = self.get_object(pk)
		lenguages_serializer = self.list_serializer_class(lenguage,many=True)
		return Response(lenguages_serializer.data)

	def update(self, request, pk):
		lenguage = self.model.objects.filter(t110_id_registrer=pk).first()
		lenguage_serializer = UpdateLenguagesSerializer(lenguage, data=request.data)
		if lenguage_serializer.is_valid():
			lenguage_serializer.save()
			return Response({
				'message': 'Registro de idioma actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': lenguage_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		lenguage_destroy = self.model.objects.filter(t110_id_registrer=pk).delete()
		#SI lo borra pero no se como indicar que se realizo con exito
		if lenguage_destroy == 1:
			return Response({
				'message': 'Registro del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe el registro del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)