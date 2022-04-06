from rest_framework import serializers
from apps.students.models import Student

class StudentImageSerializer(serializers.ModelSerializer):
        class Meta:
            model = Student
            fields = ('t100_boleta','t100_profile_picture')
        
        def update(self,instance,validate_data):
            u_logo = super().update(instance,validate_data)
            u_logo.save()
            return u_logo