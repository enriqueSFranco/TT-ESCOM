from rest_framework import serializers
from apps.vacantes.models import LanguageRequired

class LanguageRequiredSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageRequired
        fields = ('t200_id_vacant','c111_id_language','t215_written_level','t215_reading_level','t215_speaking_level','t215_comprension_level')
        #'__all__'
    
    def create(self,validate_data):
        aplication = LanguageRequired(**validate_data)
        aplication.save()
        return aplication
    
class LanguageRequiredListSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageRequired
        fields = '__all__'
        depth = 2


class UpdateLanguageRequiredSerializer(serializers.ModelSerializer):
        class Meta:
            model = LanguageRequired
            fields = ('t200_id_vacant','c111_id_language','t215_written_level','t215_reading_level','t215_speaking_level','t215_comprension_level')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()
            return u_aplication



