from turtle import undobufferentries
from rest_framework import serializers
from apps.vacantes.models import Ubication

class UbicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubication
        fields = '__all__'
    
    def create(self,validate_data):
        vacant_ubication = Ubication(**validate_data)
        vacant_ubication.save()
        return vacant_ubication
    
class UbicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubication
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't200_id_vacant' : instance['t200_id_vacant'],
            't213_state' : instance['t213_state'],
            't213_mucipality' : instance['t213_mucipality'],
            't213_locality' : instance['t213_locality'],
            't213_street' : instance['t213_street'],
            't213_cp' : instance['t213_cp'],
            't213_interior_number' : instance['t213_interior_number'],
            't213_exterior_number' : instance['t213_exterior_number']
        }

class UpdateUbicationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Ubication
            fields = ('t200_id_vacant','t213_state','t213_mucipality','t213_locality','t213_street','t213_cp','t213_interior_number','t213_exterior_number')
        
        def update(self,instance,validate_data):
            u_ubication = super().update(instance,validate_data)
            u_ubication.save()



