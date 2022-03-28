from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Ubication
from apps.companies.api.serializer.ubication_serializer import UbicationSerializer,UbicationListSerializer,UpdateUbicationSerializer

class CompanyUbicationViewSet(viewsets.GenericViewSet):
	model = Ubication
	serializer_class = UbicationSerializer
	list_serializer_class = UbicationListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk)\
				.values('t300_id_company','t302_state','t302_municipality','t302_locality','t302_street','t302_cp','t302_ext','t302_int')
		return  self.queryset #get_object_or_404(self.model,pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t300_id_company','t302_state','t302_municipality','t302_locality','t302_street','t302_cp','t302_ext','t302_int')
		return self.queryset
  

	def list(self, request):
		print(request.data)
		company_ubication = self.get_queryset()
		ubications_serializer = self.list_serializer_class(company_ubication, many=True)
		return Response(ubications_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		ubication_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if ubication_serializer.is_valid():
			ubication_serializer.save()
			return Response({
				'message': 'Ubicación de la compañia registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': ubication_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		company_ubication = self.get_object(pk)
		ubication_serializer = self.list_serializer_class(company_ubication,many=True)
		return Response(ubication_serializer.data)

	def update(self, request, pk):
		company_ubication = self.model.objects.filter(t300_id_company = pk).first()
		ubication_serializer = UpdateUbicationSerializer(company_ubication, data=request.data)
		if ubication_serializer.is_valid():
			ubication_serializer.save()
			return Response({
				'message': 'Ubicacion de la compañia actualizada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': ubication_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		ubication_destroy = self.model.objects.filter(t300_id_company=pk).delete()
		print(ubication_destroy)
		#SI lo borra pero no se como indicar que se realizo con exito
		if ubication_destroy == 1:
			return Response({
				'message': 'Compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)