from rest_framework import serializers
from apps.students.models import Certifications

class CertificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = '__all__'
    
    def create(self,validate_data):
        Historial = Certifications(**validate_data)
        Historial.save()
        return Historial
    
class CertificationsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = '__all__'
        depth = 2


class UpdateCertificationsSerializer(serializers.ModelSerializer):
        class Meta:
            model = Certifications
            fields =('t119_certification','t119_company','t119_start_date','t119_end_date','t119_in_course','t119_voucher_link')
        
        def update(self,instance,validate_data):
            update_historial = super().update(instance,validate_data)
            update_historial.save()
            return update_historial



