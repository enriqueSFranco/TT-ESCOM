from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, viewsets
from django.db.models import Count, IntegerField, OuterRef, Subquery,Max,Q
from itertools import chain
from datetime import date
import datetime
from apps.vacantes.pagination import CustomPagination
from apps.vacantes.models import Vacant,Application,Report
from apps.companies.models import Company
from apps.vacantes.api.serializers.requirements_serializer import RequiredAbilitySerializer,RequiredLanguageSerializer
from apps.vacantes.api.serializers.vacant_serializer import VacantSerializer,VacantListSerializer,UpdateVacantSerializer,VacantInfoListSerializer,VacantFilterSerializer,UpdateVacantStateSerializer

class VacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	#permission_classes = [IsAuthenticated]
	serializer_class = VacantSerializer
	requirement_serializer = RequiredAbilitySerializer
	language_serializer = RequiredLanguageSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None
	vacant_prototype = { "t200_job": "",
    					"t200_description": "",
    					"t200_creation_date": "",
    					"t200_close_date": "",
    					"t200_street": "",
    					#"t200_interior_number": "",
    					#"t200_exterior_number": "",
    					"t200_vacancy": "",
    					"t300_id_company": "",
    					"c207_id_experience": "",
    					"c214_id_modality": "",
    					"c206_id_profile": "",
    					"c204_id_vacant_status": "",
    					"c222_id_locality": "",
    					"c208_id_contract": "",
    					"t301_id_recruiter": "",
    					"t400_id_admin":""
					}
	requirement_prototype = {"c116_description": "",
    						 "t211_required_level": "",
    						 "t211_mandatory": False,
    						 "t200_id_vacant": ""
							}
	language_prototype = {"t200_id_vacant" : "",
						  "c111_id_language" : "",
						  "t110_level_description" : ""
	}

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(c204_id_vacant_status=2)\
				.all()
		return self.queryset

	def check_outdated_vacants(self):
		outdated_vacants = self.model.objects.filter(c204_id_vacant_status=2,t200_close_date__range=('2021-01-01',str(date.today()))).all()
		print(outdated_vacants)
		for vacant in outdated_vacants:
			print(vacant)
			vacant_serializer = UpdateVacantStateSerializer(vacant, data={"c204_id_vacant_status":"4"})
			if vacant_serializer.is_valid():
				print("vacante cerrada")
				vacant_serializer.save()
		return

	def list(self, request):
		"""
		Muestra todas las vacantes activas en la plataforma



		Dummy text
		""" 
		self.check_outdated_vacants()
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def set_vacant(self,data):
		vacant_data = self.vacant_prototype
		vacant_data["t200_job"] = data["t200_job"]
		vacant_data["t200_description"] = data["t200_description"]		
		vacant_data["t200_creation_date"] = str(datetime.datetime.now())
		vacant_data["t200_close_date"] = data["t200_close_date"]
		vacant_data["t200_street"] = data["t200_street"]
		#vacant_data["t200_interior_number"]: "",
		#vacant_data["t200_exterior_number"]: "",
		vacant_data["t200_vacancy"] = data["t200_vacancy"]
		vacant_data["t300_id_company"] = data["t300_id_company"]
		vacant_data["c207_id_experience"] = data["c207_id_experience"]
		vacant_data["c214_id_modality"] = data["c214_id_modality"]
		vacant_data["c206_id_profile"] = data["c206_id_profile"]
		vacant_data["c204_id_vacant_status"] = 1
		vacant_data["c222_id_locality"] = data["c222_id_locality"]
		vacant_data["c208_id_contract"] = data["c208_id_contract"]
		vacant_data["t301_id_recruiter"] = data["t301_id_recruiter"]		
		return vacant_data

	def set_requirement(self,skill,level,mandatory,id_vacant):
		requirement = self.requirement_prototype
		requirement["c116_description"] = skill
		if level =="":
			requirement["t211_required_level"] = "Indistinto"
		else:
			requirement["t211_required_level"] = level	
		requirement["t211_mandatory"] = mandatory
		requirement["t200_id_vacant"] = id_vacant
		print(requirement)
		return requirement

	def set_language(self,id_language,id_vacant,level):
		language = self.language_prototype		
		if level < 30 or level >100:
			return 
		print("Si es un nivel valido")
		language['t200_id_vacant'] = id_vacant
		language['c111_id_language'] = id_language
		if level > 30 and level < 50:
			language['t110_level_description']='Básico'	
		if level > 50 and level < 75:
			language['t110_level_description']='Medio'	
		if level > 75 and level <= 100:
			language['t110_level_description']='Avanzado'	
		return language


	def create(self, request):
		"""
		Agrega una vacante al sistema



		Dummy text
		""" 
		vacant_data = self.set_vacant(request.data)
		vacant_mandatory = request.data['mandatory']
		vacant_mandatory_level = request.data['mandatory_level']
		vacant_optional = request.data['optional']
		vacant_optional_level = request.data['optional_level']
		vacant_languages = request.data['language']					
		language_level = request.data['language_level']
		if len(vacant_languages)==0:
			vacant_languages.append("47")
			language_level.append("100")
		print(vacant_mandatory)
		vacant_serializer = self.serializer_class(data=vacant_data)
		print('request: ',request.data)
		print('request: ',request.data['mandatory'])		
		if vacant_serializer.is_valid() and vacant_mandatory:
			vacant = vacant_serializer.save()
			vacant_id= vacant.t200_id_vacant
			print(vacant_id)	
			index = 0		
			for requirement in vacant_mandatory:
				print(requirement,vacant_mandatory_level[index])				
				requirement_data = self.set_requirement(requirement,vacant_mandatory_level[index],True,vacant_id)				
				requirement_serializer =self.requirement_serializer(data = requirement_data)
				if requirement_serializer.is_valid():
					print("Requerimiento valido")
					requirement_serializer.save()					
				index = index + 1
			index = 0		
			for requirement in vacant_optional:
				print(requirement,vacant_optional_level[index])				
				requirement_data = self.set_requirement(requirement,vacant_optional_level[index],False,vacant_id)				
				requirement_serializer =self.requirement_serializer(data = requirement_data)
				if requirement_serializer.is_valid():
					print("Requerimiento valido")
					requirement_serializer.save()					
				index = index + 1
			index = 0		
			for language in vacant_languages :
				print(language,language_level[index])				
				language_data = self.set_language(int(language),vacant_id,int(language_level[index]))				
				language_serializer =self.language_serializer(data = language_data)
				print(language_data)
				if language_serializer.is_valid():
					print("Idioma valido")
					language_serializer.save()					
				index = index + 1
			return Response({
				'message': 'Vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': vacant_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		"""
		Muestra la información de una sola vacante



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
		"""
		Elimina una vacante



		Dummy text
		""" 
		vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).first()
		if vacant_destroy :
			vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Vacante eliminada correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'No existe la vacante que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
		"""
		Actualiza la información de una vacante



		Dummy text
		""" 
		vacant = self.queryset = self.model.objects.filter(t200_id_vacant = pk).first()
		vacant_serializer = UpdateVacantSerializer(vacant, data=request.data)
		if vacant_serializer.is_valid():
			vacant_serializer.save()
			return Response({
			    'message': 'Vacante actualizada correctamente'
		    }, status=status.HTTP_200_OK)
		return Response({
            'message': 'Hay errores en la actualización',
            'errors': vacant_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)



class RecruiterVacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	#permission_classes = [IsAuthenticated]
	serializer_class = VacantSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t301_id_recruiter = pk)\
				.all().order_by('t200_id_vacant')
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all().order_by('t200_id_vacant')
		return self.queryset

	def list(self, request):
		"""
		Muestra las vacantes publicadas por un reclutador



		Dummy text
		""" 
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)

	def retrieve(self, request, pk):
		"""
		Muestra una vacante publicada por un reclutador



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)


class VacantInfoViewSet(viewsets.GenericViewSet):
	model = Vacant
	list_serializer_class = VacantInfoListSerializer
	queryset = None

	def get_object(self, pk):			
		Recieved = Application.objects.filter(t200_id_vacant=pk).values('t200_id_vacant').annotate(TotalReceived=Count('t200_id_vacant'))
		Hired = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=4).values('t200_id_vacant').annotate(TotalHired=Count('t200_id_vacant'))
		OnTrack = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=2).values('t200_id_vacant').annotate(TotalOnTrack=Count('t200_id_vacant'))
		Discarted = Application.objects.filter(Q(t200_id_vacant=pk),Q(c205_id_application_state=3)|Q(c205_id_application_state=5)).values('t200_id_vacant').annotate(TotalDiscarted=Count('t200_id_vacant'))
		Unseen = Application.objects.filter(t200_id_vacant=pk,c205_id_application_state=1).values('t200_id_vacant').annotate(TotalUnseen=Count('t200_id_vacant'))
		Reports = Report.objects.filter(t200_id_vacant=pk).values('t200_id_vacant').annotate(TotalReports=Count('t200_id_vacant'))
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk).all()\
				.annotate(TotalHired=Subquery(Hired.values('TotalHired'),output_field=IntegerField()))\
				.annotate(TotalOnTrack=Subquery(OnTrack.values('TotalOnTrack'),output_field=IntegerField()))\
				.annotate(TotalDiscarted=Subquery(Discarted.values('TotalDiscarted'),output_field=IntegerField()))\
				.annotate(TotalReceived=Subquery(Recieved.values('TotalReceived'),output_field=IntegerField()))\
				.annotate(TotalUnseen=Subquery(Unseen.values('TotalUnseen'),output_field=IntegerField()))\
				.annotate(TotalReports=Subquery(Reports.values('TotalReports'),output_field=IntegerField()))				
		return self.queryset
	
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()#.values('c205_id_application_state').annotate(total=Count('c205_id_application_state'))
		return self.queryset

	def list(self, request):
		"""
		Clase generica para el registro de la ruta



		Dummy text
		""" 
		#vacants = self.get_queryset()
		#print(vacants)
		#page = self.paginate_queryset(vacants)
		#if page is not None:
		#	vacants_serializer = self.list_serializer_class(page, many=True)
		#	return Response(vacants_serializer.data)
		#vacants_serializer = self.list_serializer_class(vacants, many=True)
		#return Response(vacants_serializer.data)
		return Response({
				'message': 'No hay nada que ver aqui'
			})

	def retrieve(self, request, pk):
		"""
		Muestra el resumen del estado de una vacante publicada



		Dummy text
		""" 
		Vacant = self.get_object(pk)
		print(Vacant)
		vacant_serializer = self.list_serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)			

class FilterVacant (generics.ListAPIView):
	serializer_class = VacantFilterSerializer
	characters = "'?,.¿&"

	def get_queryset(self):		
		search_str = self.kwargs['search']		
		for x in range(len(self.characters)):
			search_str = search_str.replace(self.characters[x],"")
		search = search_str.split(" ")
		print(search)		
		count =0
		for word in search:
			if count==0:
				filter = Vacant.objects.filter(Q(c204_id_vacant_status = 2),Q(t200_job__icontains=word) )
				count = count+1
			else:
				print(word)
				filter = filter.union(Vacant.objects.filter(Q(c204_id_vacant_status = 1),Q(t200_job__icontains=word) | Q(t200_description__icontains=word)))
		return filter.all()#Vacant.objects.filter(Q(c204_id_vacant_status = 1),Q(t200_job__icontains=search) | Q(t200_description__icontains=search)).values() 
	

class FilterVacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	serializer_class = VacantSerializer
	pagination_class = CustomPagination
	list_serializer_class = VacantListSerializer
	queryset = None
	filters ={
		'job' : '',
		'company_name' : '',
		'id_profile' : '',
		'id_modality' : '',
	}
	def get_company(self,company_name):
		company_data = Company.objects.filter(t300_name=company_name)
		return company_data[0].t300_id_company

	def get_object(self):	
		self.queryset = self.model.objects.filter(c204_id_vacant_status_id = 1)
		if (self.filters['job']):
			self.queryset = self.queryset.filter(t200_job__icontains= self.filters['job'])
		if (self.filters['company_name']):
			company_id = self.get_company(self.filters['company_name'])
			self.queryset = self.queryset.filter(t300_id_company = company_id)
		if (self.filters['id_profile']):
			self.queryset = self.queryset.filter(c206_id_profile = self.filters['id_profile'])
		if (self.filters['id_modality']):
			self.queryset = self.queryset.filter(c214_id_modality = self.filters['id_modality'])
		self.queryset =	self.queryset.all()
		return self.queryset

	def get_queryset(self):	
		self.queryset = self.model.objects.filter(c204_id_vacant_status_id = 1)
		if (self.filters['job']):
			self.queryset = self.queryset.filter(t200_job__icontains= self.filters['job'])
		if (self.filters['company_name']):
			company_id = self.get_company(self.filters['company_name'])
			self.queryset = self.queryset.filter(t300_id_company = company_id)
		if (self.filters['id_profile']):
			self.queryset = self.queryset.filter(c206_id_profile = self.filters['id_profile'])
		if (self.filters['id_modality']):
			self.queryset = self.queryset.filter(c214_id_modality = self.filters['id_modality'])
		self.queryset =	self.queryset.all()
		return self.queryset

	def list(self, request):
		vacants = self.get_queryset()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)


	def create(self, request):
		print('request: ',request.data)
		self.filters['job'] = request.data['job']
		self.filters['company_name'] = request.data['company_name']
		self.filters['id_profile'] = request.data['c206_id_profile']
		self.filters['id_modality']  = request.data['id_modality']
		print(self.filters)
		vacants = self.get_object()
		page = self.paginate_queryset(vacants)
		if page is not None:
			vacants_serializer = self.list_serializer_class(page, many=True)
			return self.get_paginated_response(vacants_serializer.data)
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data)		
		