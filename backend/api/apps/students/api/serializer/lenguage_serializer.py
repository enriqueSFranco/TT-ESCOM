from rest_framework import serializers
from apps.students.models import Lenguage

class LenguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lenguage
        fields = '__all__'
    
    def create(self,validate_data):
        lenguage = Lenguage(**validate_data)
        lenguage.save()
        return lenguage
    
class LenguageListSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Lenguage
        fields = '__all__'

    def to_representation(self,instance):
        return{
	        'c111_id_language' : instance['c111_id_language'],
	        'c111_description' : instance['c111_description']
        }

class UpdateLenguageSerializer(serializers.ModelSerializer):
        class Meta:
            model = Lenguage
            fields = ('c111_id_language','c111_description')
     
        def update(self,instance,validate_data):
            update_Lenguage = super().update(instance,validate_data)
            update_Lenguage.save()
            return update_Lenguage



