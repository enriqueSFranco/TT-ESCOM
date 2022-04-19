from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Vacant
from apps.vacantes.api.serializers.vacant_serializer import VacantSerializer,VacantListSerializer,UpdateVacantSerializer

class VacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	#permission_classes = [IsAuthenticated]
	serializer_class = VacantSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset

	def list(self, request):
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def create(self, request):
		vacant_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if vacant_serializer.is_valid():
			vacant_serializer.save()
			return Response({
				'message': 'Vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': vacant_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
		vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
		if vacant_destroy :
			vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Vacante eliminada correctamente'
			})
		return Response({
			'message': 'No existe la vacante que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
            vacant = self.queryset = self.model.objects.filter(t200_id_vacant = pk).first()
            vacant_serializer = UpdateVacantSerializer(vacant, data=request.data)
            if vacant_serializer.is_valid():
                vacant_serializer.save()
                return Response({
				    'message': 'Vacante actualizada correctamente'
			    }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Hay errores en la actualización',
                'errors': vacant_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
