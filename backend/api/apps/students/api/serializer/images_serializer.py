from rest_framework import serializers
from apps.students.models import Student


class StudentImageSerializer(serializers.ModelSerializer):
        class Meta:
            model = Student
            exclude = ('id_user','t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username',
            't100_cv','t100_email','t100_gender','t100_date_of_birth','t100_personal_objectives','t100_speciality',
            't100_phonenumber','t100_residence','t100_modalities','t100_target_salary','t100_travel','t100_interest_job','is_active')
        
        def update(self,instance,validate_data):
            u_profile_pic = super().update(instance,validate_data)
            u_profile_pic.save()
            return u_profile_pic

class CVSerializer(serializers.ModelSerializer):
        class Meta:
            model = Student
            fields = ('t100_id_student','t100_email','t100_cv')
        
        def update(self,instance,validate_data):
            u_cv = super().update(instance,validate_data)
            u_cv.save()
            return u_cv            
