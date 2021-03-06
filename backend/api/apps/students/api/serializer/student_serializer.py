from rest_framework import serializers
from django.contrib import auth
from django.contrib.auth import get_user_model
from apps.students.models import Student


class StudentSerializer(serializers.ModelSerializer):
  #skills=serializers.StringRelatedField(many=True)
  class Meta:
    model = Student
    fields = ('t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username','t100_cv','t100_email',
          't100_gender','t100_date_of_birth','t100_personal_objectives','t100_phonenumber','t100_residence',
          't100_modalities','t100_speciality','t100_target_salary','t100_travel','t100_profile_picture','is_active',
          'password')

  # encriptamos el password al momento de que se crea un usuario
  def create(self, validate_data):
    student = Student(**validate_data)
    student.set_password(validate_data['password']) 
    print(student)
    # generar token de autenticacion
    student.save() # guardamos al usuario
    return student

  """def validate_t100_email(self, value):
    print("value:",value)
    if value == '':
      raise serializers.ValidationError('Tiene que indicar un correo')
    if get_user_model().objects.get(t100_email=value):
      return value
    raise serializers.ValidateError("Correo ya registrado")"""

class StudentListSerializer(serializers.ModelSerializer):
  #skills=StudentSkill(many=True)
  class Meta:
    model = Student
    fields = ('t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username','t100_email','t100_gender',
    't100_date_of_birth','t100_personal_objectives','t100_speciality','t100_phonenumber','t100_residence','t100_modalities',
    't100_target_salary','t100_travel','t100_interest_job','is_active')
    depth = 2

  """def to_representation(self, instance):
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
      't100_phonenumber' : instance['t100_phonenumber'],
	    't100_residence' : instance['t100_residence'],
	    't100_modalities' : instance['t100_modalities'],
      't100_target_salary' : instance['t100_target_salary'],
      't100_travel' : instance['t100_travel'],
      't100_profile_picture' : instance['t100_profile_picture'],
      'is_active' : instance['is_active']
    }"""

class UpdateStudentSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
    fields = ('t100_boleta','t100_name','t100_last_name','t100_username','t100_gender',
    't100_date_of_birth','t100_personal_objectives','t100_speciality','t100_phonenumber','t100_residence','t100_modalities',
    't100_target_salary','t100_travel','t100_interest_job','is_active')    
      # encriptamos el password cuando el usuario quiera actualizar su informacion
    def update(self, instance, validate_data):
      update_student = super().update(instance, validate_data)
      #update_student.set_password(validate_data['password'])
      update_student.save()
      return update_student

class PasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=128, min_length=6, write_only=True)
  password2 = serializers.CharField(max_length=128, min_length=6, write_only=True)

  def validate(self, data):
    if data['password'] != data['password2']:
      raise serializers.ValidationError(
        {'password': 'Debe ingresar ambas contrase??as iguales'}
      )
    return data

class StudentTokenSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ('t100_email','password')

  def validate(self,attrs):
    print("Validando datos...")
    correo=attrs.get('t100_email')    
    password = attrs.get('password')    
    print("Buscando usuario ....")
    try:
      user = Student.objects.filter(t100_email=correo).values('t100_email','password')
      return True
    except:
      print("NO encontre ese usuario")
      user = ""
      return False
    print("Lo que encontre")
    print(correo)
    print(user)
    print(password)
    print(attrs)
    return attrs
