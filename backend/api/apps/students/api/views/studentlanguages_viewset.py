from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import StudentLanguage
from apps.students.api.serializer.studentlanguage_serializer import LanguagesSerializer,LanguagesListSerializer,UpdateLanguagesSerializer

class LanguagesViewSet(viewsets.GenericViewSet):
	model = StudentLanguage
	serializer_class = LanguagesSerializer
	list_serializer_class = LanguagesListSerializer
	queryset = None

	def get_object(self, pk):        		          
		self.queryset = self.model.objects\
			.filter(t100_id_student=pk)\
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
		languages_serializer = self.list_serializer_class(languages, many=True)
		return Response(languages_serializer.data, status=status.HTTP_200_OK)

#{
#    "t120_level": null,
#    "t100_id_student": null,
#    "c111_id_language": null
#}

	def set_language(self,data):
		register ={
			"t100_id_student":data['t100_id_student'],
			"c111_id_language":data['c111_id_language'],
			"t110_level":"",
			"t110_level_description":""
		}
		print(register)
		if data['t110_level'] < 30 or data['t110_level'] >100:
			return register
		print("Si es un nivel valido")
		register['t110_level']=data['t110_level']
		if data['t110_level'] > 30 and data['t110_level'] < 50:
			register['t110_level_description']='Básico'
		print(register)	
		return register

	def create(self, request):
		print('request: ',request.data)
		language_data=self.set_language(request.data)
		language_serializer = self.serializer_class(data=language_data)				
		if language_serializer.is_valid():
			language_serializer.save()
			return Response({
				'message': 'Idioma registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': language_serializer.errors
		}, status=status.HTTP_200_OK)

	def retrieve(self, request, pk):        
		language = self.get_object(pk)
		languages_serializer = self.list_serializer_class(language,many=True)
		return Response(languages_serializer.data)

	def update(self, request, pk):
		language = self.model.objects.filter(t110_id_registrer=pk).first()
		language_serializer = UpdateLanguagesSerializer(language, data=request.data)
		if language_serializer.is_valid():
			language_serializer.save()
			return Response({
				'message': 'Registro de idioma actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': language_serializer.errors
		}, status=status.HTTP_200_OK)

	def destroy(self, request, pk):
		language_destroy = self.model.objects.filter(t110_id_registrer=pk).first()
		if language_destroy:
			language_destroy = self.model.objects.filter(t110_id_registrer=pk).delete()
			return Response({
				'message': 'Registro del idioma eliminado correctamente'
			})
		return Response({
			'message': 'No existe el registro que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)