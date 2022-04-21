from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Recruiter
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer,RecruiterListSerializer,ValidateRecruiterSerializer

class ValidateRecruiterViewSet(viewsets.GenericViewSet):
	model = Recruiter
	serializer_class = RecruiterSerializer
	list_serializer_class = RecruiterListSerializer
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
		credentials={
			"username" : "",
			"password" : ""
		}
		u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()
		print(request.data['is_active'])
		#Generar contraseña
		password='Contraseña perrona'
		recruiter_serializer = ValidateRecruiterSerializer(u_recruiter, data={
																			"is_active":request.data['is_active'],
																			"password":password})
		if recruiter_serializer.is_valid():#Activar el usuario
			recruiter_serializer.save()
			#crear el usuario

			return Response({
				'message': 'Reclutador autorizado',
				'password':password
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': recruiter_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)
