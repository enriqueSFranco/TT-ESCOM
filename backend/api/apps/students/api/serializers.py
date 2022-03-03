from rest_framework import serializers
from apps.students.models import Student

class StudentSerializer(serializers.ModelSerializer):
  skill = serializers.StringRelatedField(many=True)
  class Meta:
    model = Student
    fields = "__all__"

  # encriptamos el password al momento de que se crea un usuario
  def create(self, validate_data):
    student = Student(**validate_data)
    print('validate_data:',validate_data)
    student.set_password(validate_data["t100_password"]) # encriptamos el password
    student.save()
    return student

  # encriptamos el password cuando el usuario quiera actualizar su informacion
  def update(self, instance, validate_data):
    update_student = super().update(instance, validate_data)
    update_student.set_password(validate_data['t100_password'])
    update_student.save()
    return update_student

class StudentListSerializer(serializers.ModelSerializer):
  skill = serializers.StringRelatedField(many=True)
  class Meta:
    model = Student

  def to_representation(self, instance):
    return {
      't100_boleta': instance.t100_boleta,
      't100_name': instance.t100_name,
      't100_email': instance.t100_email,
      't100_password': instance.t100_password,
    }

class UpdateStudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ('t100_username', 't100_email', 't100_password')

class PasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=128, min_length=6, write_only=True)
  password2 = serializers.CharField(max_length=128, min_length=6, write_only=True)

  def validate(self, data):
    if data['password'] != data['password2']:
      raise serializers.ValidationError(
        {'password': 'Debe ingresar ambas contraseñas iguales'}
      )
    return data