from pickle import NONE
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.students.models import PersonalProjects
from apps.students.api.serializer.projects_serializer import ProjectSerializer,ProjectListSerializer,UpdateProjectSerializer

class ProjectsViewSet(viewsets.GenericViewSet):
	model = PersonalProjects
	serializer_class = ProjectSerializer
	list_serializer_class = ProjectListSerializer
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
		employments = self.get_queryset()
		employments_serializer = self.list_serializer_class(employments, many=True)
		return Response(employments_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		project_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if project_serializer.is_valid():
			project_serializer.save()
			return Response({
				'message': 'Proyecto registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': project_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):        
		projects = self.get_object(pk)
		projects_serializer = self.list_serializer_class(projects,many=True)
		return Response(projects_serializer.data)

	def update(self, request, pk):
		print(request.data)		
		project = self.model.objects.filter(t117_id_registrer=pk).first()
		project_serializer = UpdateProjectSerializer(project, data=request.data)
		if project_serializer.is_valid():
			project_serializer.save()
			return Response({
				'message': 'Proyecto actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': project_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		print(request.data)		
		project_destroy = self.model.objects.filter(t117_id_registrer=pk).first()
		if project_destroy:
			project_destroy = self.model.objects.filter(t117_id_registrer=pk).delete()
			return Response({
				'message': 'Proyecto del alumno eliminado correctamente'
			})
		return Response({
			'message': 'No existe el proyecto del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)