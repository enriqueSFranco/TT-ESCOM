from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Recruiter
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer,RecruiterListSerializer,UpdateRecruiterSerializer

class ActivateRecruiterViewSet(viewsets.GenericViewSet):
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

	def retrieve(self, request, pk):
		recruiter = self.get_object(pk)
		recruiter_serializer = self.list_serializer_class(recruiter,many=True)
		return Response(recruiter_serializer.data)

	def update(self, request, pk):
		u_recruiter = self.model.objects.filter(t300_id_recruiter = pk).first()
		recruiter_serializer = UpdateRecruiterSerializer(u_recruiter, data=request.data)
		if recruiter_serializer.is_valid():
			recruiter_serializer.save()
			return Response({
				'message': 'Reclutador autorizado'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': recruiter_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)
