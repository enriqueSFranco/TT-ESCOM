from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Recruiter
from apps.companies.api.serializer.recruiter_serializer import RecruiterSerializer,RecruiterListSerializer,UpdateRecruiterSerializer

class RecruiterViewSet(viewsets.GenericViewSet):
	model = Recruiter
	serializer_class = RecruiterSerializer
	list_serializer_class = RecruiterListSerializer
	queryset = None
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
				.filter(t301_id_recruiter = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		print(request.data)
		recruiters = self.get_queryset()
		recruiters_serializer = self.list_serializer_class(recruiters, many=True)
		return Response(recruiters_serializer.data, status=status.HTTP_200_OK)

	def set_recruiter(self,data):
		recruiter = self.recruiter_object
		recruiter["t301_name"] = data["t301_name"]
		recruiter["t301_last_name"] = data["t301_last_name"]
		recruiter["t301_second_surname"] = data["t301_second_surname"]
		recruiter["t301_email"] = data["t301_email"]
		recruiter["t301_phonenumber"] = data["t301_phonenumber"]
		recruiter["c303_id_status"] = "2"
		recruiter["t300_id_company"]= data["t300_id_company"]
		return recruiter	

	def create(self, request):
		print('request: ',request.data)
		recruiter = self.set_recruiter(request.data)
		recruiter_serializer = self.serializer_class(data=recruiter)		
		if recruiter_serializer.is_valid():
			recruiter_serializer.save()
			return Response({
				'message': 'Reclutador registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': recruiter_serializer.errors
		}, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):
		recruiter = self.get_object(pk)
		recruiter_serializer = self.list_serializer_class(recruiter,many=True)
		return Response(recruiter_serializer.data)

	def update(self, request, pk):
		u_recruiter = self.model.objects.filter(t301_id_recruiter = pk).first()
		recruiter_serializer = UpdateRecruiterSerializer(u_recruiter, data=request.data)
		if recruiter_serializer.is_valid():
			recruiter_serializer.save()
			return Response({
				'message': 'Reclutador actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': recruiter_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		recruiter_destroy = self.model.objects.filter(t301_id_recruiter=pk).first()
		print(recruiter_destroy)		
		if recruiter_destroy:
			recruiter_destroy = self.model.objects.filter(t301_id_recruiter=pk).delete()
			return Response({
				'message': 'Reclutador eliminado correctamente'
			},status = status.HTTP_204_NO_CONTENT)
		return Response({
			'message': 'No existe el reclutador que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

