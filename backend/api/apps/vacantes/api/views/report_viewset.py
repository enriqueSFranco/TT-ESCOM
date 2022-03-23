from email.mime import application
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets

from apps.vacantes.models import Report
from apps.vacantes.api.serializers.report_serializer import ReportSerializer,ReportListSerializer,UpdateReportSerializer

class ReportViewSet(viewsets.GenericViewSet):
	model = Report
	serializer_class = ReportSerializer
	list_serializer_class = ReportListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t203_id_report = pk)\
				.values('t203_id_report','t200_id_vacant','t203_publish_type','t100_boleta','c210_report_type','c220_report_state','t203_report_date','t203_atention_date','t203_adittional_comment')
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t203_id_report','t200_id_vacant','t203_publish_type','t100_boleta','c210_report_type','c220_report_state','t203_report_date','t203_atention_date','t203_adittional_comment')
		return self.queryset


	def list(self, request):
        #print(request.data)
		reports = self.get_queryset()
		reports_serializer = self.list_serializer_class(reports, many=True)        
		return Response(reports_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):
		report_serializer = self.serializer_class(data=request.data)
		print('request: ',request.data)
		if report_serializer.is_valid():
			report_serializer.save()
			return Response({
				'message': 'Aplicación registrada correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': report_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		report = self.get_object(pk)
		report_serializer = self.list_serializer_class(report,many=True)
		return Response(report_serializer.data)

	def destroy(self, request, pk):
		report_destroy = self.model.objects.filter(t203_id_report=pk).delete()
		#SI lo borra pero no se como indicar que se realizo con exito
		if report_destroy == 1:
			return Response({
				'message': 'Comunicado eliminado correctamente'
			})
		return Response({
			'message': 'No existe el comunicado que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

	def update(self, request, pk):
            u_report = self.model.objects.filter(t203_id_report=pk).first()
            report_serializer = UpdateReportSerializer(u_report, data=request.data)
            if report_serializer.is_valid():
                report_serializer.save()
                return Response({
				    'message': 'Comunicado actualizado correctamente'
			    }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Hay errores en la actualización',
                'errors': report_serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
