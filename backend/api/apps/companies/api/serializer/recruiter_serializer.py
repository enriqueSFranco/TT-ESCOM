from rest_framework import serializers
from apps.companies.models import Recruiter

class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = ('t301_name','t301_last_name','t301_second_surname','t301_user','t301_email','t301_phonenumber',
        't300_id_company','c303_id_status')
    
    def create(self,validate_data):
        new_recruiter = Recruiter(**validate_data)
        new_recruiter.save()
        return new_recruiter

    def validate_t301_email(self, value):
        # custom validation
        print("value:",value)
        if value == '':
          raise serializers.ValidationError('Sin datos')
        if Recruiter.objects.filter(t301_email=value):
          raise serializers.ValidationError("Correo ya registrado")
        return value

    def validate(self, data):        
        print("value:",data)
        if data['t301_email'] == '':
          raise serializers.ValidationError('Sin datos')
        if Recruiter.objects.filter(t301_email=data['t301_email']):
          raise serializers.ValidationError("Correo ya registrado")
        return data


class RecruiterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'
        depth = 2

    
class UpdateRecruiterSerializer(serializers.ModelSerializer):
        class Meta:
            model = Recruiter
            fields = ('t301_name','t301_last_name','t301_user','t301_email','t301_phonenumber')
        
        def update(self,instance,validate_data):
            u_recruiter = super().update(instance,validate_data)
            u_recruiter.save()
            return u_recruiter

