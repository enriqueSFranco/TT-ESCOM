from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import Vacant
from apps.vacantes.api.serializers.vacant_serializer import VacantSerializer,VacantListSerializer,UpdateVacantSerializer

class VacantViewSet(viewsets.GenericViewSet):
	model = Vacant
	serializer_class = VacantSerializer
	list_serializer_class = VacantListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk)\
				.all()
				#values('t200_id_vacant','t200_job','t200_description','t200_check_time','t200_closing_hour','t200_work_days',
            #'t200_min_salary','t200_max_salary','t200_gross_salary','t200_home_ofice','t200_publish_date','t200_close_date')		
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t200_id_vacant','t300_id_company','t200_job','t200_description','t200_check_time','t200_closing_hour','t200_work_days',
				'c207_id_experience','t200_min_salary','t200_max_salary','t200_gross_salary','t200_home_ofice','c204_id_vacant_status','t200_publish_date',
				't200_close_date','t301_id_recruiter','t400_id_admin')
		return self.queryset
  

	def list(self, request):
		vacants = self.get_queryset()
		vacants_serializer = self.list_serializer_class(vacants, many=True)
		return Response(vacants_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		print(request)
		print("Datos:")
		print(request.data)
		vacant_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if vacant_serializer.is_valid():
			vacant_serializer.save()
			return Response({
				'message': 'Vacante registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': vacant_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		Vacant = self.get_object(pk)
		vacant_serializer = self.serializer_class(Vacant,many=True)
		return Response(vacant_serializer.data)

	def destroy(self, request, pk=None):
		vacant_destroy = self.model.objects.filter(t200_id_vacant=pk).delete()
		if vacant_destroy == 1:
			return Response({
				'message': 'Vacante eliminado correctamente'
			})
		return Response({
			'message': 'No existe la vacante que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
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
