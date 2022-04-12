from rest_framework import serializers
from apps.students.models import Student


class StudentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('t100_boleta', 't100_profile_picture')

    def update(self, instance, validate_data):
        u_profile_pic = super().update(instance, validate_data)
        u_profile_pic.save()
        return u_profile_pic


class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('t100_boleta', 't100_cv')

    def update(self, instance, validate_data):
        u_cv = super().update(instance, validate_data)
        u_cv.save()
        return u_cv
