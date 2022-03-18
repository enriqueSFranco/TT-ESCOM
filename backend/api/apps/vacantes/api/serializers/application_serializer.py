from rest_framework import serializers
from apps.vacantes.models import Application

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
    
    def create(self,validate_data):
        aplication = Application(**validate_data)
        aplication.save()
        return aplication
    
class ApplicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't201_id_application' : instance['t201_id_application'],
            't100_boleta' : instance['t100_boleta'],
            #'t201_cv' : instance['t201_cv'],
            'c205_id_application_state' : instance['c205_id_application_state'],
            't201_date_application' : instance['t201_date_application']
        }

class UpdateApplicationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Application
            fields = ('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()



