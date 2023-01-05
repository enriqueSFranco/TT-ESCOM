from rest_framework import serializers
from apps.vacantes.models import Vacant,RequiredAbility

class VacantSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Vacant        
        fields = ("t300_id_company","t200_job","t200_description","c207_id_experience","c214_id_modality",
        "c206_id_profile","c204_id_vacant_status","t200_creation_date","t200_publish_date","t200_close_date",
        "c222_id_locality","t200_street","t200_interior_number","t200_exterior_number","t200_vacancy","c208_id_contract",
        "t301_id_recruiter","t200_min_salary","t200_max_salary","t200_working_hours")
    
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

class VacantFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = '__all__'    
        depth = 2
        

class UpdateVacantSerializer(serializers.ModelSerializer):
        class Meta:
            model = Vacant
            exclude = ('t301_id_recruiter','t200_id_vacant','t300_id_company','c204_id_vacant_status','t200_creation_date',
                        't200_publish_date','t200_close_date','t400_id_admin')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()
            return update_vacant

class PatchVacantSerializer(serializers.ModelSerializer):
        CP = serializers.IntegerField()
        c207_description = serializers.CharField()
        c214_description = serializers.CharField()
        c206_description = serializers.CharField()
        c208_description = serializers.CharField()
        class Meta:
            model = Vacant
            fields = ('t200_job','t200_description','t200_min_salary','t200_max_salary','t200_working_hours',
            'c207_id_experience','c207_description','c214_id_modality','c214_description','c206_id_profile','c206_description',
            'c222_id_locality','CP','t200_street','t200_interior_number',
            't200_exterior_number','t200_vacancy','c208_id_contract','c208_description')
            #exclude = ('t301_id_recruiter','t200_id_vacant','t300_id_company','c204_id_vacant_status','t200_creation_date',
            #            't200_publish_date','t200_close_date','t400_id_admin')                


class UpdateVacantStateSerializer(serializers.ModelSerializer):
        class Meta:
            model = Vacant
            exclude = ('t200_job','t200_description','t200_min_salary','t200_max_salary','t200_working_hours',
            'c207_id_experience','c214_id_modality','c206_id_profile','c222_id_locality',
            't200_street','t200_interior_number','t200_exterior_number','t200_vacancy','c208_id_contract')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()
            return update_vacant
    
    
class VacantInfoListSerializer(serializers.ModelSerializer):    
    TotalHired = serializers.IntegerField()
    TotalOnTrack = serializers.IntegerField()
    TotalDiscarted = serializers.IntegerField()
    TotalReceived = serializers.IntegerField()
    TotalUnseen = serializers.IntegerField()
    TotalReports = serializers.IntegerField()
    class Meta:
        model = Vacant
        fields = "__all__"
      
