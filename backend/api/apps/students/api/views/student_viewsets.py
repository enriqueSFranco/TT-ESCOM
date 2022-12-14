import email
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
from apps.students.api.serializer.student_serializer import StudentSerializer, StudentListSerializer, UpdateStudentSerializer

class StudentViewSet(viewsets.GenericViewSet):
	model = Student
	user_model = User
	user_serializer = UserSerializer
	serializer_class = StudentSerializer
	list_serializer_class = StudentListSerializer
	queryset = None
	create_user = {"password": "",
   							"is_superuser": False,
   							"username": "","first_name": "","last_name": "",
   							"email": "",
   							"is_staff": False,
   							"user_type": "STUDENT",
   							"is_active": True
				}

	def get_tokens_for_user(self,user):
		refresh = RefreshToken.for_user(user)
		return {
        	'refresh': str(refresh),
        	'access': str(refresh.access_token),
	    }

	def get_object(self, pk):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(id_user=pk)\
				.all()
		return self.queryset
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()								
		return self.queryset
		
	def list(self, request):
		print(request.data)
		students = self.get_queryset()
		students_serializer = self.list_serializer_class(students, many=True)
		return Response(students_serializer.data, status=status.HTTP_200_OK)

	def set_user(self,data):
		user=self.create_user
		user['password']=data['password']
		user['username']=data['t100_email']
		user['email']=data['t100_email']
		return user
		
	def set_alumno(self,data,user):
		alumno = {
			"id_user" : user,
			"t100_email" : data['t100_email']
		}
		return alumno

	def create(self, request):
		user_data = self.set_user(request.data)		
		#Crear usuario
		student_user= self.user_serializer(data = user_data)
		if student_user.is_valid():#Validar datos de usuario
			user = student_user.save()
			if user:
				print("Usuario Creado")#-------------------------------------------------------
				user_register = self.user_model.objects.filter(email=request.data['t100_email']).values('id','email')
				print(user_register[0]['id'])#-------------------------------------
				alumno = self.set_alumno(request.data,user_register[0]['id'])
				print(alumno)#--------------------------
				student_serializer = self.serializer_class(data=alumno)
				if student_serializer.is_valid():
					student_serializer.save()
					return Response({
						'message':'Cuenta registrada con éxito'},
						status.HTTP_201_CREATED)		
				else:
					user_delete = self.user_model.objects.filter(email=request.data['t100_email']).delete()
					return Response({
						'message': 'Hay errores en el registro',
						'errors': student_user.errors
						}, status=status.HTTP_200_OK)
			else:
				return Response({
					'message': 'Hay errores en el registro',
					'errors': student_user.errors
					}, status=status.HTTP_200_OK)
		else:
			return Response({
				'message': 'Hay errores en el registro',
				'errors': student_user.errors
				}, status=status.HTTP_200_OK)



	def retrieve(self, request, pk):
		student = self.get_object(pk)
		student_serializer = self.list_serializer_class(student,many=True)
		return Response(student_serializer.data)

	def update(self, request, pk):
		print(request.data)
		student = self.model.objects.filter(t100_id_student=pk).values('t100_email').first()
		user_update ={
			"first_name":request.data['t100_name'],
			"last_name":request.data['t100_last_name'],#+request.data['t100_second_surname'],
			"username": student['t100_email'],
			"email": student['t100_email']
		}
		print(request.data)
		student = self.model.objects.filter(t100_id_student=pk).first()
		student_serializer = UpdateStudentSerializer(student, data=request.data)
		print(student)
		if student_serializer.is_valid():
			student_serializer.save()
			student_user = self.user_model.objects.filter(username = student).first()						
			print(user_update)
			student_user_serializer = UpdateUserSerializer(student_user,data = user_update)
			if student_user_serializer.is_valid():
				student_user_serializer.save()
				return Response({
					'message': 'Alumno actualizado correctamente'
				}, status=status.HTTP_200_OK)
			else:
				return Response({
					'message': 'Hay errores en la actualización del usuario del alumno',
					'errors': student_user_serializer.errors
		}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización del alumno',
			'errors': student_serializer.errors
		}, status=status.HTTP_200_OK)

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