from dataclasses import field
from rest_framework import serializers
from apps.students.models import residence

class ResidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = residence
        fields = '__all__'
    
    def create(self, validate_data):
        studentresidence = residence(**validate_data)
        # generar token de autenticacion
        studentresidence.save() # guardamos al usuario
        return studentresidence
    
class ResidenceListSerializer(serializers.ModelSerializer):
  #skills=StudentSkill(many=True)
  class Meta:
    model = residence
    fields= '__all__'

  def to_representation(self, instance):
    return {
      't100_boleta': instance["t100_boleta"],
      't101_state' : instance['t101_state'],
      't101_municipality' : instance['t101_municipality'],
      't101_locality' : instance['t101_locality']
    }

class UpdateResidenceSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = residence
    fields = '__all__'

      # encriptamos el password cuando el usuario quiera actualizar su informacion
    def update(self, instance, validate_data):
      update_studentresidence = super().update(instance, validate_data)
      # update_student.set_password(validate_data['t100_password'])
      update_studentresidence.save()
      return update_studentresidence    