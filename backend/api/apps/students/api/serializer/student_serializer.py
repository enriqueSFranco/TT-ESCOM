from rest_framework import serializers
from django.contrib import auth
from django.contrib.auth import get_user_model
from apps.students.models import Student


class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = '__all__'
  
  def create(self, validate_data):
    student = Student(**validate_data)
    print(student)    
    student.save() # guardamos al usuario
    return student

  def validate_t100_email(self, value):
    # custom validation
    print("value:",value)
    if value == '':
      raise serializers.ValidationError('Sin datos')
    if Student.objects.filter(t100_email=value):
      raise serializers.ValidationError("Correo ya registrado")
    return value
    
    

class StudentListSerializer(serializers.ModelSerializer):  
  class Meta:
    model = Student
    fields = '__all__'
    depth = 2
  

class UpdateStudentSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
    fields = ('t100_boleta','t100_name','t100_last_name','t100_username','t100_gender',
    't100_date_of_birth','t100_personal_objectives','t100_speciality','t100_phonenumber','t100_residence','t100_modalities',
    't100_target_salary','t100_travel','t100_interest_job','is_active')          
    def update(self, instance, validate_data):
      update_student = super().update(instance, validate_data)      
      update_student.save()
      return update_student

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
      print("No encontre ese usuario")
      user = ""
      raise serializers.ValidationError("Credenciales invalidas")
      return False
