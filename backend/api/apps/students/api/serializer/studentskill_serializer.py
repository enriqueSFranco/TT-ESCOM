from rest_framework import serializers
from apps.students.models import StudentSkill,Student
from apps.students.api.serializer.student_serializer import StudentSerializer, StudentListSerializer, PasswordSerializer, UpdateStudentSerializer

class SkillSerializer(serializers.ModelSerializer):
  #id_boleta=serializers.CharField(source=Student.t100_boleta)
  #t100_boleta_id = StudentListSerializer()
  class Meta:
    model=StudentSkill
    fields='__all__'#['t102_id_skill','t102_description']


class SkillListSerializer(serializers.ModelSerializer):
  #t100_boleta_id=serializers.StringRelatedField(many=True,read_only=True)
  class Meta:
    model = StudentSkill
    fields='__all__'#['t102_id_skill','t102_description','t100_boleta_id']

  def to_representation(self, instance):
    return {
      "t102_id_skill": instance["t102_id_skill"],
      #"t102_description": instance["t102_description"],
      "t100_boleta": instance["t100_boleta"]
    }