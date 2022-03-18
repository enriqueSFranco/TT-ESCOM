from rest_framework import serializers
from apps.vacantes.models import Vacant

class VacantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = '__all__'
    
    def create(self,validate_data):
        vacant = Vacant(**validate_data)
        vacant.save()
        return vacant
    
class VacantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't200_id_vacant' : instance['t200_id_vacant'],
            't200_job' : instance['t200_job'],
            't200_description' : instance['t200_description'],
            't200_check_time' : instance['t200_check_time'],
            't200_closing_hour' : instance['t200_closing_hour'],
            't200_work_days' : instance['t200_work_days'],
            't200_min_salary' : instance['t200_min_salary'],
            't200_max_salary' : instance['t200_max_salary'],
            't200_gross_salary' : instance['t200_gross_salary'],
            't200_home_ofice' : instance['t200_home_ofice'],
            't200_publish_date' : instance['t200_publish_date'],
            't200_close_date' : instance['t200_close_date']
        }

class UpdateVacantSerializer(serializers.ModelSerializer):
        class Meta:
            model = Vacant
            fields = ('t200_id_vacant','t200_job','t200_description','t200_check_time','t200_closing_hour','t200_work_days',
            't200_min_salary','t200_max_salary','t200_gross_salary','t200_home_ofice','t200_publish_date','t200_close_date')
        
        def update(self,instance,validate_data):
            update_vacant = super().update(instance,validate_data)
            update_vacant.save()


