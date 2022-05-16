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
            exclude = ('t301_id_recruiter','t200_id_vacant','t300_id_company','c204_id_vacant_status')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()
            return update_vacant


class UpdateVacantStateSerializer(serializers.ModelSerializer):
        class Meta:
            model = Vacant
            exclude = ('t200_id_vacant','t300_id_company','t200_job','t200_description','t200_benefits',
            't200_check_time','t200_closing_hour', 't200_work_days','c207_id_experience','t200_min_salary',
            't200_max_salary','t200_gross_salary','t200_salary_negotiable','c214_id_modality','c206_id_profile',
            't200_publish_date','t200_close_date','t200_state','t200_municipality','t200_locality','t200_street',
            't200_cp','t200_interior_number','t200_exterior_number','t200_vacancy','c208_id_contract','t301_id_recruiter')
        
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
