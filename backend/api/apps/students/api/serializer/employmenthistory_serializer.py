from rest_framework import serializers
from apps.students.models import EmploymentHistory

class EmploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentHistory
        fields = '__all__'
    
    def create(self,validate_data):
        Historial = EmploymentHistory(**validate_data)
        Historial.save()
        return Historial
    
class EmploymentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentHistory
        fields = '__all__'
        depth = 2

    '''def to_representation(self,instance):
        return{
            't103_id_registrer' : instance['t103_id_registrer'],
            't100_boleta' : instance['t100_boleta'],
	        't103_corporation' : instance['t103_corporation'],
	        't103_employment' : instance['t103_employment'],
	        't103_description' : instance['t103_description'],
	        't103_start_date' : instance['t103_start_date'],
	        't103_end_date ' : instance['t103_end_date ']
        }'''

class UpdateEmploymentSerializer(serializers.ModelSerializer):
        class Meta:
            model = EmploymentHistory
            fields = ('t103_corporation','t103_employment','t103_description','t103_start_date','t103_end_date')
        
        def update(self,instance,validate_data):
            update_historial = super().update(instance,validate_data)
            update_historial.save()
            return update_historial



