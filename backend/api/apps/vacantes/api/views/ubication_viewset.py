from email.mime import application
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import Ubication
from apps.vacantes.api.serializers.ubication_serializer import UbicationSerializer,UbicationListSerializer,UpdateUbicationSerializer

class UbicationViewSet(viewsets.GenericViewSet):
	model = Ubication
	serializer_class = UbicationSerializer
	list_serializer_class = UbicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()#values('t200_id_vacant','t213_state','t213_mucipality','t213_locality','t213_street','t213_cp','t213_interior_number','t213_exterior_number')
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t200_id_vacant','t213_state','t213_mucipality','t213_locality','t213_street','t213_cp','t213_interior_number','t213_exterior_number')
		return self.queryset


	def list(self, request):
        #print(request.data)
		ubication = self.get_queryset()
		ubication_serializer = self.list_serializer_class(ubication, many=True)        
		return Response(ubication_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		ubication_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if ubication_serializer.is_valid():
			ubication_serializer.save()
			return Response({
				'message': 'Ubicación de la vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': ubication_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		ubication = self.get_object(pk)
		ubication_serializer = self.list_serializer_class(ubication,many=True)
		return Response(ubication_serializer.data)

	def destroy(self, request, pk):
		ubication_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
		if ubication_destroy:
			ubication_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Ubicacion de la vacante eliminada correctamente'
			})
		return Response({
			'message': 'No existe la ubicacion que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
            u_ubication = self.model.objects.filter(t200_id_vacant=pk).first()
            ubication_serializer = UpdateUbicationSerializer(u_ubication, data=request.data)
            if ubication_serializer.is_valid():
                ubication_serializer.save()
                return Response({
				    'message': 'Ubicacion actualizada correctamente'
			    }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Hay errores en la actualización',
                'errors': ubication_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
