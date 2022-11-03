from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, viewsets
from apps.vacantes.models import Comment
from apps.vacantes.api.serializers.comment_serializer import CommentSerializer,CommentListSerializer

class CommentViewset(viewsets.GenericViewSet):
	model = Comment
	#permission_classes = [IsAuthenticated]
	serializer_class = CommentSerializer
	list_serializer_class = CommentListSerializer
	queryset = None
	comment = {'t223_id_comment':'',
    			't200_id_vacant':'',
    			't400_id_admin':'',
    			't301_id_recruiter':'',
    			't223_comment':'',
    			't223_sent_date':''}

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
		"""
		Muestra todas los comentarios y observaciones realizados a las vacantes



		Dummy text
		""" 
		comments = self.get_queryset()	
		vacants_serializer = self.list_serializer_class(comments, many=True)
		return Response(vacants_serializer.data)

	def create(self, request):
		"""
		Agrega una respuesta de las observaciones de una vacante



		Dummy text
		""" 		
		comment_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		print('request: ',request.data['requirements'])
		if comment_serializer.is_valid():
			comment_serializer.save()			
			return Response({
				'message': 'Comentario registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': comment_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra los comentarios y observaciones de una sola vacante



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
		"""
		Elimina un comentario



		Dummy text
		""" 
		comment_destroy = self.model.objects.filter(t223_id_comment=pk).first()
		if comment_destroy :
			comment_destroy = self.model.objects.filter(t223_id_comment=pk).delete()
			return Response({
				'message': 'Comentario eliminado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'No existe el comentario que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)



