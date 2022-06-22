from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.administration.models import Admin
from apps.users.models import User
from apps.users.api.serializers import UserSerializer
from apps.administration.api.serializer.admin_serializer import AdminSerializer,AdminListSerializer,UpdateAdminSerializer

class AdminViewSet(viewsets.GenericViewSet):
	model = Admin
	user_model = User
	user_serializer = UserSerializer
	serializer_class = AdminSerializer
	list_serializer_class = AdminListSerializer
	queryset = None
	create_user = {"password": "",
   							"is_superuser": False,
   							"username": "","first_name": "","last_name": "",
   							"email": "",
   							"is_staff": False,
   							"user_type": "MANAGER",
   							"is_active": True,
							"user_id":0
				}
	manager_object = {"t400_name": "",
    				  "t400_last_names": "",
    				  "t400_email": "",
    				  "t400_admin": "",
    				  "t400_position": "",
    				  "id_user": 0}
			

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t400_id_admin = pk)\
				.all()#values('t400_id_admin','t400_name','t400_last_names','t400_password','t400_position')
		return  self.queryset 

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#values('t400_id_admin','t400_name','t400_last_names','t400_password','t400_position')
		return self.queryset
  

	def list(self, request):
		print(request.data)
		admins = self.get_queryset()
		admins_serializer = self.list_serializer_class(admins, many=True)
		return Response(admins_serializer.data, status=status.HTTP_200_OK)

	def set_user(self,data):
		user=self.create_user
		#------A definir por la pantalla de agregar encargado
		user['password']= "password"
		user['username']=data['t400_email']
		user['email']=data['t400_email']
		return user

	def set_manager(self,data,user):
		manager = self.manager_object
		manager['t400_name'] = data['t400_name']
		manager['t400_last_names'] = data['t400_last_names']
		manager['t400_email'] = data['t400_email']
		manager['t400_admin'] = data['t400_admin']
		manager['t400_position'] = data['t400_position']
		manager['id_user'] = user
		return manager


	def create(self, request):
		user_data = self.set_user(request.data)	
		manager_user = self.user_serializer(data = user_data)
		if manager_user.is_valid():
			user = manager_user.save()
			user_register = self.user_model.objects.filter(email=request.data['t400_email']).values('id','email')
			print(user_register[0]['id'])#-------------------------------------
			manager_data = self.set_manager(request.data,user_register[0]['id'])
			print(manager_data)#-------------------------------------
			admin_serializer = self.serializer_class(data=manager_data)
			if admin_serializer.is_valid():
				admin_serializer.save()
				return Response({'message': 'Administrador registrado correctamente.'
								}, status=status.HTTP_201_CREATED)
			else:
				print("No es valido DXDXDXXXXX")#-------------------------------------
				user_delete = self.user_model.objects.filter(email=request.data['t400_email']).delete()
				return Response({'message': 'Hay errores en el registro',
								'errors': admin_serializer.errors
								}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({
				'message': 'Hay errores en el registro',
				'errors': manager_user.errors
			}, status=status.HTTP_400_BAD_REQUEST)

	def old_create(self, request):
		user_data = self.set_user(request.data)	
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
		admin_destroy = self.model.objects.filter(t400_id_admin=pk).first()				
		if admin_destroy:
			admin_destroy = self.model.objects.filter(t400_id_admin=pk).delete()
			return Response({
				'message': 'Administrador eliminado correctamente'
			})
		return Response({
			'message': 'No existe el administrador que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)