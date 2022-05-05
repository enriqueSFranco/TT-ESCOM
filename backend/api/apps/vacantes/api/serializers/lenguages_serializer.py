from rest_framework import serializers
from apps.vacantes.models import LenguageRequired

class LenguageRequiredSerializer(serializers.ModelSerializer):
    class Meta:
        model = LenguageRequired
        fields = ('t200_id_vacant','c111_id_language','t215_written_level','t215_reading_level','t215_speaking_level','t215_comprension_level')
        #'__all__'
    
    def create(self,validate_data):
        aplication = LenguageRequired(**validate_data)
        aplication.save()
        return aplication
    
class LenguageRequiredListSerializer(serializers.ModelSerializer):
    class Meta:
        model = LenguageRequired
        fields = '__all__'
        depth = 2


class UpdateLenguageRequiredSerializer(serializers.ModelSerializer):
        class Meta:
            model = LenguageRequired
            fields = ('t200_id_vacant','c111_id_language','t215_written_level','t215_reading_level','t215_speaking_level','t215_comprension_level')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()
            return u_aplication



