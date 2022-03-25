from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.students.models import Student, StudentSkill


class StudentSerializer(serializers.ModelSerializer):
  #skills=serializers.StringRelatedField(many=True)
  class Meta:
    model = Student
    fields = "__all__"#("t100_boleta", "t100_name", "t100_academic_level", "t100_email", "t100_password")

  # encriptamos el password al momento de que se crea un usuario
  def create(self, validate_data):
    student = Student(**validate_data)
    #student.set_password(validate_data['password']) 
    # generar token de autenticacion
    student.save() # guardamos al usuario
    return student

  def validate_email(self, value):
    print("value:",value)
    if value == '':
      raise serializers.ValidationError('Tiene que indicar un correo')
    if get_user_model().objects.get(t100_email=value):
      return value
    raise serializers.ValidateError("Correo ya registrado")

class StudentListSerializer(serializers.ModelSerializer):
  #skills=StudentSkill(many=True)
  class Meta:
    model = Student
    fields='__all__'

  def to_representation(self, instance):
    return {
      't100_boleta' : instance['t100_boleta'],
      't100_name' : instance['t100_name'],
      't100_last_name' : instance['t100_last_name'],
      't100_username' : instance['t100_username'],
      't100_password' : instance['t100_password'],
      't100_cv' : instance['t100_cv'],
      't100_email' : instance['t100_email'],
      't100_gender' : instance['t100_gender'],
      't100_date_of_birth' : instance['t100_date_of_birth'],
      't100_personal_objectives' : instance['t100_personal_objectives'],
      't100_speciality' : instance['t100_speciality'],
      't100_target_salary' : instance['t100_target_salary'],
      't100_travel' : instance['t100_travel'],
      't100_profile_picture' : instance['t100_profile_picture'],
      'is_active' : instance['is_active']
    }

class UpdateStudentSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
    fields = ('t100_boleta','t100_name','t100_last_name','t100_username','t100_password','t100_cv','t100_email','t100_gender','t100_date_of_birth','t100_personal_objectives','t100_speciality','t100_target_salary','t100_travel','t100_profile_picture','is_active')

      # encriptamos el password cuando el usuario quiera actualizar su informacion
    def update(self, instance, validate_data):
      update_student = super().update(instance, validate_data)
      # update_student.set_password(validate_data['t100_password'])
      update_student.save()
      return update_student

class PasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=128, min_length=6, write_only=True)
  password2 = serializers.CharField(max_length=128, min_length=6, write_only=True)

  def validate(self, data):
    if data['password'] != data['password2']:
      raise serializers.ValidationError(
        {'password': 'Debe ingresar ambas contraseñas iguales'}
      )
    return data

class StudentTokenSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ('t100_boleta', 't100_name', 't100_last_name', 't100_username', 't100_email', 't100_password')
