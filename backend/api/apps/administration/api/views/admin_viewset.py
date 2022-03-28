from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.administration.models import Admin
from apps.administration.api.serializer.admin_serializer import AdminSerializer,AdminListSerializer,UpdateAdminSerializer

class AdminViewSet(viewsets.GenericViewSet):
	model = Admin
	serializer_class = AdminSerializer
	list_serializer_class = AdminListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t400_id_admin = pk)\
				.values('t400_id_admin','t400_name','t400_last_names','t400_password','t400_position')
		return  self.queryset #get_object_or_404(self.model,pk=pk)

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t400_id_admin','t400_name','t400_last_names','t400_password','t400_position')
		return self.queryset
  

	def list(self, request):
		print(request.data)
		admins = self.get_queryset()
		admins_serializer = self.list_serializer_class(admins, many=True)
		return Response(admins_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		admin_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if admin_serializer.is_valid():
			admin_serializer.save()
			return Response({
				'message': 'Administrador registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': admin_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		admin = self.get_object(pk)
		admin_serializer = self.list_serializer_class(admin,many=True)
		return Response(admin_serializer.data)

	def update(self, request, pk):
		u_admin = self.model.objects.filter(t400_id_admin = pk).first()
		admin_serializer = UpdateAdminSerializer(u_admin, data=request.data)
		if admin_serializer.is_valid():
			admin_serializer.save()
			return Response({
				'message': 'Administrador actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': admin_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		admin_destroy = self.model.objects.filter(t400_id_admin=pk).delete()
		print(admin_destroy)
		#SI lo borra pero no se como indicar que se realizo con exito
		if admin_destroy == 1:
			return Response({
				'message': 'Administrador eliminado correctamente'
			})
		return Response({
			'message': 'No existe el administrador que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)