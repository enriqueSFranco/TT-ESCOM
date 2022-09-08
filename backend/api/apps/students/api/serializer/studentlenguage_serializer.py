from rest_framework import serializers
from apps.students.models import StudentLenguage,Lenguage

class LenguagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentLenguage
        fields = '__all__'
        #depth = 2
    
    def create(self,validate_data):
        Lenguages = StudentLenguage(**validate_data)
        Lenguages.save()
        return Lenguages
    
class LenguagesListSerializer(serializers.ModelSerializer):    
    class Meta:
        model = StudentLenguage
        fields = '__all__'
        depth = 2

    """def to_representation(self,instance):
        print(instance)        
        return{
            't110_id_registrer' : instance['t110_id_registrer'],
            't100_boleta' : instance['t100_boleta'],
	        'c111_id_language' : instance['c111_id_language'],
	        't110_written_level' : instance['t110_written_level'],
	        't110_reading_level' : instance['t110_reading_level'],
	        't110_speaking_level' : instance['t110_speaking_level'],
	        't110_comprension_level' : instance['t110_comprension_level'],
	        't110_native' : instance['t110_native']
        }"""

class UpdateLenguagesSerializer(serializers.ModelSerializer):
        class Meta:
            model = StudentLenguage
            fields = ('t110_level','c120_id_level')
     
        def update(self,instance,validate_data):
            update_Lenguages = super().update(instance,validate_data)
            update_Lenguages.save()
            return update_Lenguages



