from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics,viewsets
from datetime import date
import datetime


from apps.users.models import User
from apps.vacantes.models import Vacant
from apps.administration.api.serializer.data_serializer import ValidateRecruiterSerializer,ValidateCompanySerializer,OnHoldVacantsSerializer,ValidateVacantSerializer
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer,RecruiterListSerializer
from apps.companies.models import Company, Recruiter
from apps.users.api.serializers import UserSerializer
from apps.companies.api.serializer.company_serializer import CompanySerializer,CompanyListSerializer



class ValidateRecruiterViewSet(viewsets.GenericViewSet):
	model = Recruiter
	company_model =  Company
	serializer_class = RecruiterSerializer
	list_serializer_class = RecruiterListSerializer
	user_serializer = UserSerializer
	queryset = None
	create_user = {"password": "",
   					"is_superuser": False,
   					"username": "","first_name": "","last_name": "",
   					"email": "",
   					"is_staff": False,
   					"user_type": "RECRUITER",
   					"is_active": True,
					"user_id":0}

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t301_id_recruiter = pk,id_user__isnull=True)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(id_user__isnull=True)\
				.all()
		return self.queryset


	def retrieve(self, request, pk):
		"""
		Muestra la información de un reclutador pendiente de validación



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
		return Response( status=status.HTTP_200_OK)			

	def set_user(self,data):
		user=self.create_user
		#---------Generar contraseña
		user['password'] = "Prueba123"
		user['username'] = data['t301_email']
		user['email'] = data['t301_email']
		user["first_name"] = data["t301_name"]
		user["last_name"] = data["t301_last_name"] + data["t301_second_surname"]
		return user

	def update(self, request, pk):
		"""
		Registra la validación de un reclutador



		Dummy text
		""" 
		id_company = ""
		print(request.data['activate'])
		if (request.data['activate']== 'true' and self.model.objects.filter(t301_id_recruiter=pk)):
			print("Dando de alta al reclutador....")#---------------------------
			recruiter_data = self.model.objects.filter(t301_id_recruiter=pk).values('t301_name','t301_email','t301_last_name','t301_second_surname')
			print("Linea 73:"+str(recruiter_data[0]))#---------------------------
			user_data = self.set_user(recruiter_data[0])
			recruiter_user= self.user_serializer(data = user_data)
			if recruiter_user.is_valid():
				user = recruiter_user.save()#Guardar usuario					
				user_register = User.objects.filter(username=recruiter_data[0]['t301_email']).values('id')
				u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()	
				print("Linea 80:"+str(user_register[0]['id']))#---------------------------
				recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data={"c303_id_status":4,"id_user":user_register[0]['id']})
				if recruiter_serializer.is_valid():#Activar el usuario
					recruiter_serializer.save()	
					#Generar envío de correo con la contraseña
					return Response({
						'message': 'Dado de alta'
						}, status=status.HTTP_200_OK)
				else:
					user_delete = User.objects.filter(username=recruiter_data[0]['t301_email']).delete()
					return Response({'message': 'No se pudo actualizar el reclutador, intentalo de nuevo',
									'errors': recruiter_user.errors
									}, status=status.HTTP_200_OK)
			else:
				#user_delete = User.objects.filter(username=recruiter_data[0]['t301_email']).delete()#----------Validar si este caso es valido
				return Response({'message': 'No se pudo validar el reclutador, intentalo de nuevo',
						'errors': recruiter_user.errors
						}, status=status.HTTP_200_OK)
		else:
			print("Reclutador eliminado por solicitud rechazada")#---------------------------
			recruiter_destroy = self.model.objects.filter(t301_id_recruiter=pk).delete()			
			return Response({
				'message': 'Registro rechazado'				
			}, status=status.HTTP_200_OK)

		
class ActivateCompanyViewSet(viewsets.GenericViewSet):
	model = Company
	user_serializer = UserSerializer
	serializer_class = CompanySerializer
	list_serializer_class = CompanyListSerializer
	recruiter_serializer_class = RecruiterSerializer
	queryset = None		
	company_validation ={
		't400_id_admin':'',
		't300_create_date':'',
		'c302_id_status':''
	}
	update_recruiter={
		'c303_id_status':2,
		'id_user':''
	}

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c302_id_status=1,t300_id_company = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(c302_id_status = 1)\
				.all()
		return self.queryset
	
	def list(self, request):
		"""
		Clase generica necesaria para registrar la ruta 



		Dummy text
		""" 
		return Response( status=status.HTTP_200_OK)			

	def retrieve(self, request, pk):
		"""
		Muestra la información de una compañia pendiente de validar"



		Dummy text
		""" 
		company = self.get_object(pk)
		company_serializer = self.list_serializer_class(company,many=True)
		return Response(company_serializer.data)

	def set_data(self,data):
		company_data = self.company_validation		
		company_data['t400_id_admin'] = data['t400_id_admin']		
		company_data['t300_create_date'] = str(date.today())
		company_data['c302_id_status'] = 3
		return company_data
	
	def update(self, request, pk):
		"""
		Actualiza el estado de validación de la compañia



		Dummy text
		""" 
		if(request.data['activate']):
			recruiter_state=self.update_recruiter
			company_data=self.set_data(request.data)	
			print(company_data)#------------------------
			u_company = self.model.objects.filter(t300_id_company = pk).first()			
			company_serializer = ValidateCompanySerializer(u_company, data=company_data)
			if company_serializer.is_valid():
				#
				u_recruiter = Recruiter.objects.filter(t300_id_company=pk).first()
				print(self.update_recruiter)
				recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data=recruiter_state)
				if recruiter_serializer.is_valid():					
					company_serializer.save()
					recruiter_serializer.save()					
					return Response({
						'message': 'Compañia Validada correctamente'
					}, status=status.HTTP_200_OK)
				return Response({
					'message': 'Hay errores en la actualización, no se pudo cambiar el estado del reclutador',
					'errors': recruiter_serializer.errors
				}, status=status.HTTP_200_OK)
			return Response({
				'message': 'Hay errores en la actualización, no se pudo validar empresa',
				'errors': company_serializer.errors
			}, status=status.HTTP_200_OK)
		else:
			#Borrar reclutador asociado
			recruiter_destroy = Recruiter.objects.filter(t300_id_company=pk)
			#Borrar compañia
			company_destroy = self.model.objects.filter(t300_id_company=pk).first()
			if (recruiter_destroy and company_destroy):
				recruiter_destroy = Recruiter.objects.filter(t300_id_company=pk).delete()
				company_destroy = self.model.objects.filter(t300_id_company=pk).delete()
				return Response({
					'message': 'Compañia Rechazada'
				}, status=status.HTTP_200_OK)


class ActivateVacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	serializer_class = ValidateVacantSerializer
	list_serializer_class = OnHoldVacantsSerializer
	queryset = None		
	vacant_validation_info = {"t400_id_admin":"",
						 "c204_id_vacant_status":"",
						 "t200_publish_date":"",
						 "t200_close_date":""}						 


	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(c204_id_vacant_status=1,t200_id_vacant = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(c204_id_vacant_status = 1)\
				.all()
		return self.queryset

	def list(self, request):
		"""
		Obtiene todas las vacantes en espera



		Dummy text
		""" 	
		vacant = self.get_queryset()
		vacants_serializer = self.list_serializer_class(vacant, many=True)
		return Response(vacants_serializer.data, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):
		"""
		Obtiene la información de una vacante en espera especifíca



		Dummy text
		""" 	
		vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(vacant,many=True)
		return Response(vacant_serializer.data)

	def update(self, request, pk):
		"""
		Actualiza el estado de la vacante



		Dummy text
		""" 
		print(request.data)
		actual_month = datetime.datetime.now().month
		close_date = datetime.datetime.now()
		print("Mes Actual:",actual_month)
		new_month = actual_month+1
		print("Mes Nuevo:",new_month)
		if new_month > 12:
			new_month = 1
			actual_year = datetime.datetime.now().year
			new_year = actual_year + 1
			close_date = close_date.replace(year=new_year)	
		close_date = close_date.replace(month=new_month)
		vacant_validation = self.vacant_validation_info
		vacant_validation["t400_id_admin"] = request.data["t400_id_admin"]
		vacant_validation["t200_publish_date"]  = str(datetime.datetime.now())
		#vacant_validation["t200_close_date"]  = str(close_date)
		#t200_close_date
		#Abrir vacante
		if(request.data['activate']):
			vacant_validation["c204_id_vacant_status"] = 2			
			u_vacant = self.model.objects.filter(t200_id_vacant=pk,c204_id_vacant_status=1).first()
			if u_vacant.t200_close_date:
				vacant_validation["t200_close_date"]  = u_vacant.t200_close_date
				vacant_serializer = self.serializer_class(u_vacant,data=vacant_validation)
			else:
				vacant_validation["t200_close_date"]  = str(close_date)
				vacant_serializer = self.serializer_class(u_vacant,data=vacant_validation)
			if vacant_serializer.is_valid():
				vacant_serializer.save()
				return Response({
					'message': 'Vacante Validada'
					}, status=status.HTTP_200_OK)
			return Response({
					'message': 'Hay errores en la actualización, no se pudo cambiar el estado de la vacante',
					'errors': vacant_serializer.errors
				}, status=status.HTTP_200_OK)						
		#Cerrar vacante por rechazo
		else:
			vacant_validation["c204_id_vacant_status"] = 3
			u_vacant = self.model.objects.filter(t200_id_vacant=pk,c204_id_vacant_status=1).first()
			vacant_serializer = self.serializer_class(u_vacant,data=vacant_validation)
			if vacant_serializer.is_valid():
				vacant_serializer.save()
				return Response({
					'message': 'Vacante Rechazada'
					}, status=status.HTTP_200_OK)
			return Response({
					'message': 'Hay errores en la actualización, no se pudo cambiar el estado de la vacante',
					'errors': vacant_serializer.errors
				}, status=status.HTTP_200_OK)			