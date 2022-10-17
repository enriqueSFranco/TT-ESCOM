from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.administration.models import Rol
from apps.administration.api.serializer.catalogs_serializer import RolCatalogSerializer


class RolViewSet(viewsets.GenericViewSet):
	model = Rol
	list_serializer_class = RolCatalogSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c401_id_rol = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def retrieve(self, request, pk):
		"""
		Muestra el registro de un catalogo



		Dummy text
		""" 
		rol = self.get_object(pk)
		rol_serializer = self.list_serializer_class(rol,many=True)
		return Response(rol_serializer.data)

	def list(self,request):
		"""
		Clase generica que muestra el catalogo 



		Dummy text
		""" 
		rol = self.get_queryset()
		rol_serializer = self.list_serializer_class(rol,many=True)
		return Response(rol_serializer.data)		


