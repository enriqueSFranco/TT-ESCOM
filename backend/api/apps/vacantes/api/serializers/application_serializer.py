from rest_framework import serializers
from apps.vacantes.models import Application,ApplicationStateHistory

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('t200_id_vacant','t100_id_student','c205_id_application_state','t201_date_application')        
    
    def create(self,validate_data):
        aplication = Application(**validate_data)
        aplication.save()
        return aplication
    
class ApplicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
        depth = 2

class UpdateApplicationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Application
            exclude = ('t200_id_vacant','t100_id_student')
        
        def update(self,instance,validate_data):
            u_aplication = super().update(instance,validate_data)
            u_aplication.save()
            return u_aplication


class ApplicationStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationStateHistory
        fields = ('t201_id_application','c205_id_application_state','t216_modify_date')        
    
    def create(self,validate_data):
        aplication = ApplicationStateHistory(**validate_data)
        aplication.save()
        return aplication
    
class ApplicationStateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
        

