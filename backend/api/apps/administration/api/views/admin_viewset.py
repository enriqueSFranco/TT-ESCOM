from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.administration.models import Admin
from apps.companies.models import Company, Recruiter
from apps.users.models import User
from apps.users.api.serializers import UpdateUserSerializer
from apps.users.api.serializers import UserSerializer
from apps.administration.api.serializer.data_serializer import OnHoldRecruiterListSerializer
from apps.administration.api.serializer.admin_serializer import AdminSerializer,AdminListSerializer,UpdateAdminSerializer
from apps.companies.api.serializer.company_serializer import CompanySerializer,CompanyListSerializer

class AdminViewSet(viewsets.GenericViewSet):
	model = Admin
	user_model = User
	user_serializer = UserSerializer
	serializer_class = AdminSerializer
	list_serializer_class = AdminListSerializer
	queryset = None
	update_user = {
		'username':'',
		'first_name':'',
		'last_name':'',
		'email':''
	}
	create_user = {"password": "",
   							"is_superuser": False,
   							"username": "",
							"first_name": "",
							"last_name": "",
   							"email": "",
   							"is_staff": False,
   							"user_type": "MANAGER",
   							"is_active": True
				}
	manager_object = {"t400_name": "",
    				  "t400_last_name": "",
    				  "t400_email": "",
    				  "t400_admin": "",
    				  "t400_position": "",
					  "c401_id_rol"
    				  "id_user": 0}
			

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t400_id_admin = pk)\
				.all()
		return  self.queryset 

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		"""
		Muestra todos los encargados registrados en el sistema



		Dummy text
		""" 
		print(request.data)
		admins = self.get_queryset()
		admins_serializer = self.list_serializer_class(admins, many=True)
		return Response(admins_serializer.data, status=status.HTTP_200_OK)

	def set_user(self,data):
		user=self.create_user
		#------A definir por la pantalla de agregar encargado
		user['password']= "Prueba123"
		user['username']=data['t400_email']
		user['email']=data['t400_email']
		user['first_name'] = data['t400_name']
		user['last_name'] = data['t400_last_name']+data['t400_second_surname']
		return user

	def set_manager(self,data,user):
		manager = self.manager_object
		manager['t400_name'] = data['t400_name']
		manager['t400_last_name'] = data['t400_last_name']
		manager['t400_second_surname'] = data['t400_second_surname']
		manager['t400_email'] = data['t400_email']
		manager['t400_position'] = data['t400_position']
		manager['id_user'] = user
		manager['c401_id_rol'] = data['c401_id_rol']
		return manager


	def create(self, request):
		"""
		Agrega un nuevo encargado al sistema



		Dummy text
		""" 
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
				user_delete = self.user_model.objects.filter(email=request.data['t400_email']).delete()
				return Response({'message': 'Hay errores en el registro',
								'errors': admin_serializer.errors
								}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({
				'message': 'Hay errores en el registro',
				'errors': manager_user.errors
			}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra la información de un encargado



		Dummy text
		""" 
		admin = self.get_object(pk)
		admin_serializer = self.list_serializer_class(admin,many=True)
		return Response(admin_serializer.data)

	
	def set_update_user(self,data):
		update_user = self.update_user
		update_user['username'] = data['t400_email']
		update_user['first_name'] = data['t400_name']
		update_user['last_name'] = data['t400_last_name']+data['t400_second_surname']
		update_user['email'] = data['t400_email']
		return update_user

	def update(self, request, pk):
		"""
		Actualiza la información de un encargado



		Dummy text
		""" 
		u_admin = self.model.objects.filter(t400_id_admin = pk).first()
		admin_serializer = UpdateAdminSerializer(u_admin, data=request.data)
		if admin_serializer.is_valid():
			admin_serializer.save()
			admin = self.model.objects.filter(t400_id_admin = pk).values('id_user').first()
			print(admin['id_user'])#----------------------------
			u_user = self.user_model.objects.filter(id=admin['id_user'])
			user = self.set_update_user(request.data)
			user_serializer = UpdateUserSerializer(u_user,data=user)
			if user_serializer.is_valid():
				user_serializer.save()
				return Response({
					'message': 'Administrador actualizado correctamente'
				}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': admin_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		"""
		Elimina un encargado del sistema



		Dummy text
		""" 
		admin_destroy = self.model.objects.filter(t400_id_admin=pk).first()				
		if admin_destroy:
			admin_destroy = self.model.objects.filter(t400_id_admin=pk).delete()
			return Response({
				'message': 'Administrador eliminado correctamente'
			})
		return Response({
			'message': 'No existe el administrador que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


class OnHoldRecruitersViewSet(viewsets.GenericViewSet):
	model = Recruiter
	list_serializer_class = OnHoldRecruiterListSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk,c303_id_status=2)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(c303_id_status=2)\
				.all()
		return self.queryset


	def retrieve(self, request, pk):
		"""
		Muestra los reclutadores pendientes de validación de una compañia



		Dummy text
		""" 
		recruiter = self.get_object(pk)
		recruiter_serializer = self.list_serializer_class(recruiter,many=True)
		return Response(recruiter_serializer.data)

	def list(self,request):
		"""
		Clase generica necesaria para registrar la ruta 



		Dummy text
		""" 
		recruiter = self.get_queryset()
		recruiter_serializer = self.list_serializer_class(recruiter,many=True)
		return Response(recruiter_serializer.data)		


class OnHoldCompaniesViewSet(viewsets.GenericViewSet):
	"""
	Sin comentarios
	""" 	
	model = Company
	user_serializer = UserSerializer
	serializer_class = CompanySerializer
	list_serializer_class = CompanyListSerializer
	queryset = None
	company_object = {
					  "t300_name": "",
					  "t300_rfc": "",
					  "t300_bussiness_name": "",
					  "t300_validator_document":"",
					  "c302_id_status":""
					 }
	recruiter_object={
					  "t301_name":"",
    				  "t301_last_name":"",
					  "t301_second_surname":"",
    				  "t301_email": "",
    				  "t301_phonenumber":"",
					  "t300_id_company":"",
					  "c303_id_status":""
					}	

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk,c302_id_status=1)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(c302_id_status=1)\
				.all()
		return self.queryset
  

	def list(self, request):
		"""
		Obtiene todos las compañias registradas en el sistema



		Dummy text
		""" 	
		print(request.data)
		company = self.get_queryset()
		companies_serializer = self.list_serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)

		

	def retrieve(self, request, pk):
		"""
		Obtiene la información de una compañia especifíca registrada en el sistema



		Dummy text
		""" 	
		company = self.get_object(pk)
		company_serializer = self.list_serializer_class(company,many=True)
		return Response(company_serializer.data)

	def destroy(self, request, pk):
		"""
		Elimina la información de una compañia del sistema 



		Dummy text
		""" 	
		company_destroy = self.model.objects.filter(t300_id_company=pk).first()		
		if company_destroy:
			company_destroy = self.model.objects.filter(t300_id_company=pk).delete()
			return Response({
				'message': 'Compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)
