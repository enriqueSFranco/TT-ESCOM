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

    '''def to_representation(self,instance):
        return{
            't104_id_registrer': instance['t104_id_registrer'],
            't100_boleta' : instance['t100_boleta'],
	        't104_academic_unit' : instance['t104_academic_unit'],
	        't104_carreer' : instance['t104_carreer'],
	        'c107_id_academic_level ' : instance['c107_id_academic_level'],
	        #'C108_id_area ' : instance['C108_id_area '],
	        'c109_id_academic_state ' : instance['c109_id_academic_state'],
	        't104_start_date' : instance['t104_start_date'],
	        't104_end_date' : instance['t104_end_date']
        }'''

class UpdateAcademicHistorySerializer(serializers.ModelSerializer):
        class Meta:
            model = AcademicHistory
            fields = '__all__'#('t104_id_registrer','t100_boleta','t104_academic_unit','t104_carreer','c107_id_academic_level','c109_id_academic_state','t104_start_date','t104_end_date')
        
        def update(self,instance,validate_data):
            update_historial = super().update(instance,validate_data)
            update_historial.save()
            return update_historial



