from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Recruiter
from apps.companies.models import Company
from apps.users.api.serializers import UserSerializer
from apps.users.models import User
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer,RecruiterListSerializer,ValidateRecruiterSerializer

class ValidateRecruiterViewSet(viewsets.GenericViewSet):
	model = Recruiter
	company_model =  Company
	serializer_class = RecruiterSerializer
	list_serializer_class = RecruiterListSerializer
	user_serializer = UserSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t301_id_recruiter = pk,is_active=False)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(is_active=False)\
				.all()
		return self.queryset


	def retrieve(self, request, pk):
		recruiter = self.get_object(pk)
		recruiter_serializer = self.list_serializer_class(recruiter,many=True)
		return Response(recruiter_serializer.data)

	def list(self, request):
		print(request.data)
		recruiters = self.get_queryset()
		recruiters_serializer = self.list_serializer_class(recruiters, many=True)
		return Response(recruiters_serializer.data, status=status.HTTP_200_OK)

	def update(self, request, pk):
		user_data={
   				"password":"",
   				"is_superuser": False,
   				"username":"",
   				"first_name": "",
   				"last_name": "",
   				"email":"",
   				"is_staff": False,
   				"user_type": "RECRUITER",
   				"is_active": True,
				"user_id":pk
		}
		id_company=""
		print(request.data['is_active'])
		if (request.data['is_active']=='true'):
			print("Si paso")
			u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()		
			#Generar contraseña
			password='Contraseña perrona'
			recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data={
																				"is_active":request.data['is_active'],
																				"password":password})
			if recruiter_serializer.is_valid():#Activar el usuario
				recruiter_serializer.save()				
				#Crear el usuario
				recruiter_data = self.model.objects.filter(t301_id_recruiter = pk).values('t301_name','t301_email','t301_last_name','t300_id_company')
				print(recruiter_data[0]['t301_name'])
				user_data['password'] = password
				user_data['username'] = recruiter_data[0]['t301_email']
				user_data["first_name"] = recruiter_data[0]['t301_name']
				user_data["last_name"] = recruiter_data[0]['t301_last_name']
				id_company=recruiter_data[0]['t300_id_company']				
				recruiter_user= self.user_serializer(data = user_data)
				if recruiter_user.is_valid():#Validar datos de usuario
					user = recruiter_user.save()#Guardar usuario	
					#Activar empresa
					data_company = self.company_model.objects.filter(t300_id_company=id_company)
					return Response({
						'message': 'Reclutador autorizado',
						'password':password
					}, status=status.HTTP_200_OK)
				else:
					Response({
						'message': 'No se pudo crear el usuario del reclutador',
						'errors': recruiter_user.errors
						}, status=status.HTTP_400_BAD_REQUEST)
			return Response({
				'message': 'Hay errores en la actualización',
				'errors': recruiter_serializer.errors
			}, status=status.HTTP_400_BAD_REQUEST)
		else:
			#Desactivar user			
			u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()					
			password=''
			recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data={
																				"is_active":request.data['is_active'],
																				"password":password})
			recruiter_data = self.model.objects.filter(t301_id_recruiter = pk).values('t301_name','t301_email','t301_last_name','t300_id_company')																				
			recruiter_destroy = User.objects.filter(username=recruiter_data[0]['t301_email']).delete()
			#Eliminar empresa nueva
			#Eliminar 
			return Response({
				'message': 'Registro rechazado'				
			}, status=status.HTTP_200_OK)
