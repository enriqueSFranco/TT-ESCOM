from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import Announcement
from apps.vacantes.api.serializers.announcement_serializer import AnnouncementSerializer,AnnouncementListSerializer,UpdateAnnouncementSerializer

class AnnouncementViewSet(viewsets.GenericViewSet):
	model = Announcement
	serializer_class = AnnouncementSerializer
	list_serializer_class = AnnouncementListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t202_id_announcement = pk)\
				.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def list(self, request):
		announcements = self.get_queryset()
		announcements_serializer = self.list_serializer_class(announcements, many=True)
		return Response(announcements_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		announcement_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if announcement_serializer.is_valid():
			announcement_serializer.save()
			return Response({
				'message': 'Anuncio registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': announcement_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		announcement = self.get_object(pk)
		announcement_serializer = self.list_serializer_class(announcement,many=True)
		return Response(announcement_serializer.data)

	def destroy(self, request, pk):
		announcement_destroy = self.model.objects.filter(t202_id_announcement=pk).first()		
		if announcement_destroy:
			announcement_destroy = self.model.objects.filter(t202_id_announcement=pk).delete()
			return Response({
				'message': 'Comunicado eliminado correctamente'
			})
		return Response({
			'message': 'No existe el comunicado que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
            announcement = self.model.objects.filter(t202_id_announcement=pk).first()
            announcement_serializer = UpdateAnnouncementSerializer(announcement, data=request.data)
            if announcement_serializer.is_valid():
                announcement_serializer.save()
                return Response({
				    'message': 'Comunicado actualizado correctamente'
			    }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Hay errores en la actualización',
                'errors': announcement_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
