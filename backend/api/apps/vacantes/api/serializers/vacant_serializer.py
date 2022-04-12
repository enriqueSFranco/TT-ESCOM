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
            fields = ('t200_job','t200_description','t200_requirements','t200_benefits','t200_check_time','t200_closing_hour'
            ,'t200_work_days','c207_id_experience','t200_min_salary','t200_max_salary','t200_gross_salary','t200_home_ofice'
            ,'c206_id_profile','c204_id_vacant_status','t200_close_date')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()
            return update_vacant



