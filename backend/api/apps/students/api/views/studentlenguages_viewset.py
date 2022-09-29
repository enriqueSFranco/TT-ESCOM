from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import StudentLanguage
from apps.students.api.serializer.studentlenguage_serializer import LanguagesSerializer,LanguagesListSerializer,UpdateLanguagesSerializer

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
		lenguages = self.get_queryset()
		lenguages_serializer = self.list_serializer_class(lenguages, many=True)
		return Response(lenguages_serializer.data, status=status.HTTP_200_OK)

#{
#    "t120_level": null,
#    "t100_id_student": null,
#    "c111_id_language": null
#}

	def set_lenguage(self,data):
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
		lenguage_data=self.set_lenguage(request.data)
		lenguage_serializer = self.serializer_class(data=lenguage_data)				
		if lenguage_serializer.is_valid():
			lenguage_serializer.save()
			return Response({
				'message': 'Idioma registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': lenguage_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):        
		lenguage = self.get_object(pk)
		lenguages_serializer = self.list_serializer_class(lenguage,many=True)
		return Response(lenguages_serializer.data)

	def update(self, request, pk):
		lenguage = self.model.objects.filter(t110_id_registrer=pk).first()
		lenguage_serializer = UpdateLanguagesSerializer(lenguage, data=request.data)
		if lenguage_serializer.is_valid():
			lenguage_serializer.save()
			return Response({
				'message': 'Registro de idioma actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': lenguage_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		lenguage_destroy = self.model.objects.filter(t110_id_registrer=pk).first()
		if lenguage_destroy:
			lenguage_destroy = self.model.objects.filter(t110_id_registrer=pk).delete()
			return Response({
				'message': 'Registro del idioma eliminado correctamente'
			})
		return Response({
			'message': 'No existe el registro que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)