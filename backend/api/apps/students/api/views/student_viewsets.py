from lib2to3.pgen2 import token
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import Student
from apps.users.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from apps.users.views import MyTokenObtainPairSerializer
from apps.users.api.serializers import UserSerializer,UpdateUserSerializer
from apps.students.api.serializer.student_serializer import StudentSerializer, StudentListSerializer, PasswordSerializer, UpdateStudentSerializer

class StudentViewSet(viewsets.GenericViewSet):
	model = Student
	user_model = User
	user_serializer = UserSerializer
	serializer_class = StudentSerializer
	list_serializer_class = StudentListSerializer
	queryset = None

	def get_tokens_for_user(self,user):
		refresh = RefreshToken.for_user(user)
		return {
        	'refresh': str(refresh),
        	'access': str(refresh.access_token),
	    }

	def get_object(self, pk):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(t100_id_student=pk)\
				.values('t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username','t100_email','t100_gender',
    					't100_date_of_birth','t100_personal_objectives','t100_speciality','t100_phonenumber','t100_residence',
						't100_modalities','t100_target_salary','t100_travel','t100_interest_job','is_active')
		return self.queryset
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username','t100_email','t100_gender',
    					't100_date_of_birth','t100_personal_objectives','t100_speciality','t100_phonenumber','t100_residence',
						't100_modalities','t100_target_salary','t100_travel','t100_interest_job','is_active')
		return self.queryset

  # TODO terminar ruta para cambiar el password
	@action(detail=True, methods=['post'],url_path='cambio_pass')
	def set_password(self, request, pk=None):
		student = self.get_object(pk)
		password_serializer = PasswordSerializer(data=request.data)
		if password_serializer.is_valid():
			student.set_password(
				password_serializer.validated_data['password'])
			student.save()
			return Response({
				'message': 'Contraseña actualizada correctamente'
			})
		return Response({
			'message': 'Hay errores en la información enviada',
			'errors': password_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def list(self, request):
		print(request.data)
		students = self.get_queryset()
		students_serializer = self.list_serializer_class(students, many=True)
		return Response(students_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		user_data={
   				"password": request.data['password'],
   				"is_superuser": False,
   				"username": request.data['t100_email'],
   				"first_name": "",
   				"last_name": "",
   				"email": request.data['t100_email'],
   				"is_staff": False,
   				"user_type": "STUDENT",
   				"is_active": True,
				"user_id":0
		}
		credentials={
			"username" : request.data['t100_email'],
			"password" : request.data['password']
		}
		student_serializer = self.serializer_class(data=request.data)
		#print('request: ',request.data)
		if student_serializer.is_valid():#Validar datos
			student_serializer.save()#Crear estudiantes
			print(user_data)
			id_student = self.model.objects.filter(t100_email=request.data['t100_email']).values('t100_id_student','t100_email')
			print("ID DEL NUEVO ESTUDIANTE", id_student[0]['t100_id_student'])
			user_data['user_id']=id_student[0]['t100_id_student']
			print(user_data)
			#student_serializer = self.serializer_class(id_student,many=True)
			student_user= self.user_serializer(data = user_data)
			if student_user.is_valid():#Validar datos de usuario
				user = student_user.save()#Guardar usuario				
				if user:
					print("Usuario creado")
					credentials_serializer = ObtainAuthToken.serializer_class(data = credentials, context = {'request':request})
					if credentials_serializer.is_valid():
						print("Credenciales correctas")
						user= credentials_serializer.validated_data['user']
						tokens = self.get_tokens_for_user(user)
						print(tokens)
						#token,created = Token.objects.get_or_create(user = user)     
						user_serializer = UserSerializer(user)    
						if tokens:
							print("Token creado")
							return Response({'access':tokens['access'],
							 'refresh':tokens['refresh'],
                             'user':user_serializer.data,
                             'message':'Cuenta registrada con éxito'},
                  			 status.HTTP_201_CREATED)						
						else:
							return Response({'error':'No se pudo crear el token'},status = status.HTTP_400_BAD_REQUEST)
					else:
						student_destroy = self.model.objects.filter(t100_email=request.data['t100_email']).delete()
						return Response({
							'message': 'Hay errores en el registro',
							'errors': credentials_serializer.errors
						}, status=status.HTTP_400_BAD_REQUEST)

		else:	
			#student_destroy = self.model.objects.filter(t100_email=request.data['t100_email']).delete()
			return Response({
				'message': 'Hay errores en el registro',
				'errors': student_serializer.errors
			}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		student = self.get_object(pk)
		student_serializer = self.list_serializer_class(student,many=True)
		return Response(student_serializer.data)

	def update(self, request, pk):
		user_update ={
			"first_name":request.data['t100_name'],
			"last_name":request.data['t100_last_name']
		}
		print(request.data)
		student = self.model.objects.filter(t100_id_student=pk).first()
		student_serializer = UpdateStudentSerializer(student, data=request.data)
		print(student)
		if student_serializer.is_valid():
			student_serializer.save()
			student_user = self.user_model.objects.filter(username = student).first()
			print(student_user)
			print(user_update)
			student_user_serializer = UpdateUserSerializer(student_user,data = user_update)
			if student_user_serializer.is_valid():
				student_user_serializer.save()
				return Response({
					'message': 'Alumno actualizado correctamente'
				}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': student_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		student_destroy = self.model.objects.filter(t100_id_student=pk).first()
		print(student_destroy)
		user_destroy = self.user_model.objects.filter(username=student_destroy).first()
		print(user_destroy)
		if student_destroy and user_destroy:
			student_destroy = self.model.objects.filter(t100_id_student=pk).delete()
			user_destroy = self.user_model.objects.filter(username=student_destroy).delete()
			return Response({
				'message': 'Alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe el alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)