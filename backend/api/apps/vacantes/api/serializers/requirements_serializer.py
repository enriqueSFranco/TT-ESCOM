from rest_framework import serializers
from apps.vacantes.models import RequiredAbility,RequiredLanguage

class RequiredAbilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredAbility
        fields = '__all__'
    
    def create(self,validate_data):
        aplication = RequiredAbility(**validate_data)
        aplication.save()
        return aplication
    
class RequiredAbilityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredAbility
        fields = '__all__'        
        depth = 2


class UpdateRequiredAbilitySerializer(serializers.ModelSerializer):
        class Meta:
            model = RequiredAbility
            fields = ('t200_id_vacant','c116_id_skill')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()
            return u_aplication


class RequiredLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredLanguage
        fields = '__all__'
    
    def create(self,validate_data):
        aplication = RequiredLanguage(**validate_data)
        aplication.save()
        return aplication
    
class RequiredLanguageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredLanguage
        fields = '__all__'        
        depth = 2
