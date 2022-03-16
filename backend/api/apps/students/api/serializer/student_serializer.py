from rest_framework import serializers
<<<<<<< HEAD
from apps.students.models import Student

class StudentSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
    fields = ("t100_boleta", "t100_name", "t100_academic_level", "t100_email", "t100_password")
=======
from apps.students.models import Student,StudentSkill


class StudentSerializer(serializers.ModelSerializer):
  #skills=serializers.StringRelatedField(many=True)
  class Meta:
    model = Student
    fields = "__all__"#("t100_boleta", "t100_name", "t100_academic_level", "t100_email", "t100_password")
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae

  # encriptamos el password al momento de que se crea un usuario
  def create(self, validate_data):
    student = Student(**validate_data)
    # generar token de autenticacion
    student.save() # guardamos al usuario
    return student

class StudentListSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
=======
  #skills=StudentSkill(many=True)
  class Meta:
    model = Student
    fields='__all__'
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae

  def to_representation(self, instance):
    return {
      't100_boleta': instance["t100_boleta"],
      't100_name': instance["t100_name"],
      't100_email': instance["t100_email"],
      't100_password': instance["t100_password"],
<<<<<<< HEAD
      't100_rfc': instance["t100_rfc"],
      't100_gender': instance["t100_gender"],
      't100_academic_level': instance["t100_academic_level"],
=======
      #'t100_rfc': instance["t100_rfc"],
      't100_gender': instance["t100_gender"],
      #'t100_academic_level': instance["t100_academic_level"],
      't102_skills':'skills'
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
    }

class UpdateStudentSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = Student
    fields = ('t100_boleta', 't100_name', 't100_last_name', 't100_username', 't100_email', 't100_password')

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
<<<<<<< HEAD
    return data

class StudentTokenSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ('t100_boleta', 't100_name', 't100_last_name', 't100_username', 't100_email', 't100_password')
=======
    return data
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
