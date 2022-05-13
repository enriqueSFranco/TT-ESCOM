from rest_framework import serializers
from apps.vacantes.models import Requirement

class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = ('t200_id_vacant','c116_id_skill')
        #'__all__'
    
    def create(self,validate_data):
        aplication = Requirement(**validate_data)
        aplication.save()
        return aplication
    
class RequirementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = '__all__'
        #'__all__'
        depth = 2


class UpdateRequirementSerializer(serializers.ModelSerializer):
        class Meta:
            model = Requirement
            fields = ('t200_id_vacant','c116_id_skill')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()
            return u_aplication



