from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Company
from apps.companies.api.serializer.images_serializer import CompanyLogoSerializer,CompanyBannerSerializer

class CompanyLogoViewSet(viewsets.GenericViewSet):
	model = Company
	serializer_class = CompanyLogoSerializer	
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk)\
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
		company = self.get_queryset()
		companies_serializer = self.serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		company = self.get_object(pk)
		company_serializer = self.serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request, pk):
		print(request.data)
		u_company = self.model.objects.filter(t300_id_company = pk).first()
		company_serializer = self.serializer_class(u_company, data=request.data)
		if company_serializer.is_valid():
			company_serializer.save()
			return Response({
				'message': 'Logo de la compañia actualizada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': company_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		company_destroy = self.model.objects.filter(t300_id_company=pk).first()				
		if company_destroy:
			company_destroy = self.model.objects.filter(t300_id_company=pk).update(t300_logo="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'Logo de la compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe logo de la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


class CompanyBannerViewSet(viewsets.GenericViewSet):
	model = Company
	serializer_class = CompanyBannerSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t300_id_company = pk)\
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
		company = self.get_queryset()
		companies_serializer = self.serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		print(request.data)
		company = self.get_object(pk)
		company_serializer = self.serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request, pk):
		print(request.data)
		u_company = self.model.objects.filter(t300_id_company = pk).first()
		company_serializer = self.serializer_class(u_company, data=request.data)
		if company_serializer.is_valid():
			company_serializer.save()
			return Response({
				'message': 'Banner de la compañia actualizada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': company_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		company_destroy = self.model.objects.filter(t300_id_company=pk).first()				
		if company_destroy:
			company_destroy = self.model.objects.filter(t300_id_company=pk).update(t300_banner="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'Banner de la compañia eliminada correctamente'
			})
		return Response({
			'message': 'No existe banner de la compañia que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)