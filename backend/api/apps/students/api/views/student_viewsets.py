from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import Student
from apps.students.api.serializer.student_serializer import StudentSerializer, StudentListSerializer, PasswordSerializer, UpdateStudentSerializer

class StudentViewSet(viewsets.GenericViewSet):
	model = Student
	serializer_class = StudentSerializer
	list_serializer_class = StudentListSerializer
	queryset = None

	def get_object(self, pk):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(pk=pk)\
				.values('t100_boleta','t100_name','t100_last_name','t100_username','t100_cv','t100_email','t100_gender','t100_date_of_birth',
				't100_personal_objectives','t100_phonenumber','t100_residence','t100_modalities','t100_speciality','t100_target_salary','t100_travel',
				't100_profile_picture','is_active','password')
		return self.queryset
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_boleta','t100_name','t100_last_name','t100_username','t100_cv','t100_email','t100_gender','t100_date_of_birth',
				't100_personal_objectives','t100_phonenumber','t100_residence','t100_modalities','t100_speciality','t100_target_salary','t100_travel',
				't100_profile_picture','is_active','password')
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
		student_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if student_serializer.is_valid():
			student_serializer.save()
			return Response({
				'message': 'Alumno registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': student_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		student = self.get_object(pk)
		student_serializer = self.serializer_class(student,many=True)
		return Response(student_serializer.data)

	def update(self, request, pk):
		student = self.model.objects.filter(t100_boleta=pk).first()
		student_serializer = UpdateStudentSerializer(student, data=request.data)
		if student_serializer.is_valid():
			student_serializer.save()
			return Response({
				'message': 'Alumno actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': student_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		student_destroy = self.model.objects.filter(t100_boleta=pk).first()
		if student_destroy:
			student_destroy = self.model.objects.filter(t100_boleta=pk).delete()
			return Response({
				'message': 'Alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe el alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)