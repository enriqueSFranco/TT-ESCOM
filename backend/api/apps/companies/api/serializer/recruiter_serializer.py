from rest_framework import serializers
from apps.companies.models import Recruiter

class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = ('t301_name','t301_last_name','t301_user','t301_email','t301_phonenumber','t300_id_company','is_active')
    
    def create(self,validate_data):
        new_recruiter = Recruiter(**validate_data)
        new_recruiter.save()
        return new_recruiter
    
class RecruiterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'
        depth = 2

    
class UpdateRecruiterSerializer(serializers.ModelSerializer):
        class Meta:
            model = Recruiter
            fields = ('t301_name','t301_last_name','t301_user','t301_email','t301_phonenumber','is_active')
        
        def update(self,instance,validate_data):
            u_recruiter = super().update(instance,validate_data)
            u_recruiter.save()
            return u_recruiter



