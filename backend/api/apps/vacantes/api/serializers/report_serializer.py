from rest_framework import serializers
from apps.vacantes.models import Report

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
    
    def create(self,validate_data):
        new_report = Report(**validate_data)
        new_report.save()
        return new_report
    
class ReportListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't203_id_report' : instance['t203_id_report'],
            't200_id_vacant' : instance['t200_id_vacant'],
            't203_publish_type' : instance['t203_publish_type'],
            't100_boleta' : instance['t100_boleta'],
            #'t300_id_company' : instance['t300_id_company'],
            'c210_report_type' : instance['c210_report_type'],
            'c220_report_state' : instance['c220_report_state'],
            't203_report_date' : instance['t203_report_date'],
            #'t400_id_admin ' : instance['t400_id_admin '],
            't203_atention_date' : instance['t203_atention_date'],
            't203_adittional_comment' : instance['t203_adittional_comment']
        }

class UpdateReportSerializer(serializers.ModelSerializer):
        class Meta:
            model = Report
            fields = ('t203_id_report','t200_id_vacant','t203_publish_type','t100_boleta','c210_report_type','c220_report_state','t203_report_date','t203_atention_date','t203_adittional_comment')
        
        def update(self,instance,validate_data):
            u_report = super().update(instance,validate_data)
            u_report.save()
            return u_report



