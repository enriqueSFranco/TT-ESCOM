from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apps.vacantes.models import Vacant
from apps.vacantes.api.serializers.vacant_serializer import VacantSerializer, UpdateVacantSerializer, VacantListSerializer

class VacantViewSet(viewsets.GenericViewSet):
    model = Vacant
    serializer_class = VacantSerializer
    list_serializer_class = VacantListSerializer
    queryset = None

    def get_object(self,pk):
        return get_object_or_404(self.model, pk=pk)
    
    def queryset(self):
        if self.queryset is None:
            self.queryset = self.model.objects\
                .filter(is_active = True)\
                .values('t200_id_vacant', 't200_job','t200_description','t200_address','t200_check_time','t200_closing_hour','t200_work_days',
                't200_benefits','t200_min_salary','t200_max_salary','t200_gross_salary','t200_home_ofice','t200_open_date','t200_close_date',
                'c204_id_status','c106_id_type_candidate','c207_id_experience')
        return self.queryset

    @action(detail=True, methods=['post'])
    def get_permissions(self):
        if self.action == 'list':
            return [IsAuthenticated()]
        else:
            return super(VacantViewSet, self).get_permissions()
    
    def list(self, request):
        vacants = self.get_queryset()
        vacants_serializer = self.list_serializer_class(vacants, many=True)
        return Response(vacants_serializer.data, status=status.HTTP_200_OK)
        
    def create(self, request):
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
    
    def retrieve(self, request, pk=None):
        vacant = self.get_object(pk)
        vacant_serializer = self.serializer_class(vacant)
        return Response(vacant_serializer.data)
    
    def update(self, request, pk=None):
        vacant = self.get_object(pk)
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
    
    def destroy(self, request, pk=None):
        vacant_destroy = self.model.objects.filter(id=pk).update(is_active=False)
        if vacant_destroy == 1:
            return Response({
				'message': 'Vacante eliminada correctamente'
			})
        return Response({
			'message': 'No existe el alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)