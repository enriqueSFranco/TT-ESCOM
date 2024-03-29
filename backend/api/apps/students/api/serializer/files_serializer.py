from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField,Base64FileField
from apps.students.models import Student,PDFBase64File


class StudentImageSerializer(serializers.ModelSerializer):
        t100_profile_picture = Base64ImageField(required=True)
        class Meta:
            model = Student
            fields = ('t100_username','t100_profile_picture')
        
        def update(self,instance,validate_data):
            u_profile_pic = super().update(instance,validate_data)
            u_profile_pic.save()
            return u_profile_pic

class CVSerializer(serializers.ModelSerializer):
        t100_cv = PDFBase64File()
                
        class Meta:
            model = Student
            fields = ('t100_username','t100_cv')        

            def update(self,instance,validate_data):
                u_cv = super().update(instance,validate_data)
                u_cv.save()
                return u_cv            
        
