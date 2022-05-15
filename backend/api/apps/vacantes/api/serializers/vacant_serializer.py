from rest_framework import serializers
from apps.vacantes.models import Vacant

class VacantSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Vacant        
        fields = '__all__'
    
    def create(self,validate_data):
        print("Creando nueva vacante...")
        print(validate_data)
        vacant = Vacant(**validate_data)
        vacant.save()
        return vacant
    
class VacantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = '__all__'    
        depth = 2
    

class UpdateVacantSerializer(serializers.ModelSerializer):
        class Meta:
            model = Vacant
            exclude = ('t301_id_recruiter','t200_id_vacant','t300_id_company')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()
            return update_vacant


    
class VacantInfoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = '__all__'    

    def to_representation(self,instance):
        
        return{
            'id_state' : instance['c205_id_application_state'],
            'total':instance['total']
        }        
