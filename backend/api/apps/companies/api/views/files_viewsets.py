from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.companies.models import Company
from apps.companies.api.serializer.files_serializer import CompanyLogoSerializer,CompanyBannerSerializer,CompanyFileSerializer

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
		"""
		Muestra los logos de las compañias registradas



		Dummy text
		""" 
		print(request.data)#-------------------------
		company = self.get_queryset()
		companies_serializer = self.serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		"""
		Muestra el logo de una empresa



		Dummy text
		""" 
		company = self.get_object(pk)
		company_serializer = self.serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request, pk):
		"""
		Actualiza el logo de una empresa



		Dummy text
		""" 
		print(request.data)#------------------------------------
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
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		"""
		Elimina el logo de una empresa



		Dummy text
		""" 
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
		"""
		Muestra todos las portadas de las empresas



		Dummy text
		""" 
		print(request.data)#--------------------------------
		company = self.get_queryset()
		companies_serializer = self.serializer_class(company, many=True)
		return Response(companies_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		"""
		Muestra la portada de una empresa



		Dummy text
		""" 
		print(request.data)#-----------------------------------
		company = self.get_object(pk)
		company_serializer = self.serializer_class(company,many=True)
		return Response(company_serializer.data)

	def update(self, request, pk):
		"""
		Actualiza la portada de una compañia



		Dummy text
		""" 
		print(request.data)#----------------------------------
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
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		"""
		Elimina la portada de una compañia



		Dummy text
		""" 
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


class ValidationDocumentViewSet(viewsets.GenericViewSet):
	model = Company
	serializer_class = CompanyFileSerializer
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
		companies_files = self.get_queryset()
		files_serializer = self.serializer_class(companies_files, many=True)
		return Response(files_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		company_file = self.get_object(pk)
		file_serializer = self.serializer_class(company_file,many=True)
		return Response(file_serializer.data)
	

	def update(self, request, pk):
		print(request.data)
		u_file = self.model.objects.filter(t300_rfc = request.data['t300_rfc']).first()
		file_serializer = self.serializer_class(u_file, data=request.data)
		if file_serializer.is_valid():
			file_serializer.save()
			return Response({
				'message': 'Archivo validador agregado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': file_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		file_destroy = self.model.objects.filter(t300_id_company=pk).first()				
		if file_destroy:
			file_destroy = self.model.objects.filter(t300_id_company=pk).update(t300_validator_document="")
			#Eliminar archivo del backend
			return Response({
				'message': 'Archivo eliminado correctamente'
			})
		return Response({
			'message': 'No existe archivo que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)