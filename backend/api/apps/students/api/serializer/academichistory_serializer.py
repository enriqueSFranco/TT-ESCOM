from rest_framework import serializers
from apps.students.models import AcademicHistory

class AcademicHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicHistory
        fields = '__all__'
    
    def create(self,validate_data):
        Historial = AcademicHistory(**validate_data)
        Historial.save()
        return Historial
    
class AcademicHistoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicHistory
        fields = '__all__'
        depth = 2


class UpdateAcademicHistorySerializer(serializers.ModelSerializer):
        class Meta:
            model = AcademicHistory
            fields =('t104_academic_unit','t104_carreer','c107_id_academic_level','c109_id_academic_state',
            't104_start_date','t104_end_date')
        
        def update(self,instance,validate_data):
            update_historial = super().update(instance,validate_data)
            update_historial.save()
            return update_historial



