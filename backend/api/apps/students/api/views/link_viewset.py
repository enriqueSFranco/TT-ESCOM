from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import Link
from apps.students.api.serializer.link_serializer import LinkSerializer,LinkListSerializer,UpdateLinkSerializer

class LinkViewSet(viewsets.GenericViewSet):
	model = Link
	serializer_class = LinkSerializer
	list_serializer_class = LinkListSerializer
	queryset = None

	def get_object(self, pk):
		if self.queryset is None:        
			self.queryset = self.model.objects\
				.filter(t100_boleta=pk)\
				.all()
				#values('t114_id_registrer','t100_boleta','t113_link','c115_id_plataform')
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t114_id_registrer','t100_boleta','t113_link','c115_id_plataform')
		return self.queryset
  

	def list(self, request):
		links = self.get_queryset()
		links_serializer = self.list_serializer_class(links, many=True)
		return Response(links_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		link_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if link_serializer.is_valid():
			link_serializer.save()
			return Response({
				'message': 'Link del alumno registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': link_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	#Obtener todos los links de un estudiante
	def retrieve(self, request, pk):
		link = self.get_object(pk)
		link_serializer = self.list_serializer_class(link,many=True)
		return Response(link_serializer.data)

	def update(self, request, pk):
		link = self.model.objects.filter(t114_id_registrer=pk).first()
		link_serializer = UpdateLinkSerializer(link, data=request.data)
		if link_serializer.is_valid():
			link_serializer.save()
			return Response({
				'message': 'Link del alumno actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': link_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		link_destroy = self.model.objects.filter(t114_id_registrer=pk).delete()
		#SI lo borra pero no se como indicar que se realizo con exito
		if link_destroy == 1:
			return Response({
				'message': 'Link del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe link del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)