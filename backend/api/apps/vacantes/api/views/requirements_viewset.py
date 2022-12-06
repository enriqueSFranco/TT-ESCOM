from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import RequiredAbility,RequiredLanguage
from apps.vacantes.api.serializers.report_serializer import ReportSerializer,ReportListSerializer,UpdateReportSerializer
from apps.vacantes.api.serializers.requirements_serializer import RequiredAbilitySerializer,RequiredAbilityListSerializer,UpdateRequiredAbilitySerializer
from apps.vacantes.api.serializers.requirements_serializer import RequiredLanguageSerializer,RequiredLanguageListSerializer

class AbilityViewSet(viewsets.GenericViewSet):
	model = RequiredAbility
	serializer_class = RequiredAbilitySerializer
	list_serializer_class = RequiredAbilityListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def list(self, request):        
		abilities = self.get_queryset()
		print(request.data)
		abilities_serializer = self.list_serializer_class(abilities, many=True)        
		return Response(abilities_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		print(request.data)
		ability_serializer = self.serializer_class(data=request.data)
		if ability_serializer.is_valid():
			ability_serializer.save()
			return Response({
				'message': 'Habilidad registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': ability_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		print(request.data)
		ability = self.get_object(pk)
		ability_serializer = self.list_serializer_class(ability,many=True)
		return Response(ability_serializer.data)

	def destroy(self, request, pk):
		ability_destroy = self.model.objects.filter(t200_id_vacant=pk).first()		
		if ability_destroy:
			ability_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Requisitos para la vacante borrados exitosamente'
			})
		return Response({
			'message': 'No existen requistos para la vacante'
		}, status=status.HTTP_404_NOT_FOUND)

class LanguageViewSet(viewsets.GenericViewSet):
	model = RequiredLanguage
	serializer_class = RequiredLanguageSerializer
	list_serializer_class = RequiredLanguageListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def list(self, request):        
		languages = self.get_queryset()
		print(request.data)
		languages_serializer = self.list_serializer_class(languages, many=True)        
		return Response(languages_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		print(request.data)
		language_serializer = self.serializer_class(data=request.data)
		if language_serializer.is_valid():
			language_serializer.save()
			return Response({
				'message': 'Idioma registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': language_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		print(request.data)
		language = self.get_object(pk)
		language_serializer = self.list_serializer_class(language,many=True)
		return Response(language_serializer.data)

	def destroy(self, request, pk):
		language_destroy = self.model.objects.filter(t200_id_vacant=pk).first()		
		if language_destroy:
			language_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
			return Response({
				'message': 'Idiomas para la vacante borrados exitosamente'
			})
		return Response({
			'message': 'No existen requistos para la vacante'
		}, status=status.HTTP_404_NOT_FOUND)
