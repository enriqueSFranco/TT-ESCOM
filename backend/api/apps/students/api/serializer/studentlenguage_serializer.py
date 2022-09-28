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


class UpdateLenguagesSerializer(serializers.ModelSerializer):
        class Meta:
            model = StudentLenguage
            fields = ('t110_level','c120_id_level')
     
        def update(self,instance,validate_data):
            update_Lenguages = super().update(instance,validate_data)
            update_Lenguages.save()
            return update_Lenguages



