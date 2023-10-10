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
        depth = 2

class UpdateReportSerializer(serializers.ModelSerializer):
        class Meta:
            model = Report
            fields = ('c210_report_type','c220_report_state','t400_id_admin','t203_report_date','t203_atention_date',
            't203_adittional_comment')
        
        def update(self,instance,validate_data):
            u_report = super().update(instance,validate_data)
            u_report.save()
            return u_report



