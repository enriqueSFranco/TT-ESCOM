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
				.filter(t301_id_recruiter = pk,id_user__isnull=False)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(id_user__isnull=True)\
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

	def set_user(self,data):
		user=self.create_user
		#---------Generar contraseña
		user['password'] = "Prueba123"
		user['username'] = data['t301_email']
		user['email'] = data['t301_email']
		user["first_name"] = data["t301_name"]
		user["last_name"] = data["t301_last_name"]
		return user

	def update(self, request, pk):
		id_company = ""
		print(request.data['is_active'])
		if (request.data['is_active']== 'true' and self.model.objects.filter(t301_id_recruiter=pk)):
			print("Dando de alta al reclutador....")#---------------------------
			recruiter_data = self.model.objects.filter(t301_id_recruiter=pk).values('t301_name','t301_email','t301_last_name')
			print("Linea 73:"+str(recruiter_data[0]))#---------------------------
			user_data = self.set_user(recruiter_data[0])
			recruiter_user= self.user_serializer(data = user_data)
			if recruiter_user.is_valid():
				user = recruiter_user.save()#Guardar usuario					
				user_register = User.objects.filter(username=recruiter_data[0]['t301_email']).values('id')
				u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()	
				print("Linea 80:"+str(user_register[0]['id']))#---------------------------
				recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data={"is_active":True,"id_user":user_register[0]['id']})
				if recruiter_serializer.is_valid():#Activar el usuario
					recruiter_serializer.save()	
					return Response({
						'message': 'Dado de alta'
						}, status=status.HTTP_200_OK)
				else:
					user_delete = User.objects.filter(username=recruiter_data[0]['t301_email']).delete()
					return Response({'message': 'No se pudo actuzlizar el reclutador, intentalo de nuevo',
									'errors': recruiter_user.errors
									}, status=status.HTTP_400_BAD_REQUEST)
			else:
				user_delete = User.objects.filter(username=recruiter_data[0]['t301_email']).delete()
				return Response({'message': 'No se pudo validar el reclutador, intentalo de nuevo',
						'errors': recruiter_user.errors
						}, status=status.HTTP_400_BAD_REQUEST)
		else:
			print("Reclutador eliminado por solicitud rechazada")#---------------------------
			recruiter_destroy = self.model.objects.filter(t301_id_recruiter=pk).delete()			
			#Eliminar empresa nueva
			#Eliminar 
			return Response({
				'message': 'Registro rechazado'				
			}, status=status.HTTP_200_OK)