from rest_framework import serializers
from apps.students.models import StudentLanguage,Language

class LanguagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentLanguage
        fields = '__all__'
        #depth = 2
    
    def create(self,validate_data):
        Languages = StudentLanguage(**validate_data)
        Languages.save()
        return Languages
    
class LanguagesListSerializer(serializers.ModelSerializer):    
    class Meta:
        model = StudentLanguage
        fields = '__all__'
        depth = 2


class UpdateLanguagesSerializer(serializers.ModelSerializer):
        class Meta:
            model = StudentLanguage
            fields = ('t110_level','c120_id_level')
     
        def update(self,instance,validate_data):
            update_Languages = super().update(instance,validate_data)
            update_Languages.save()
            return update_Languages



