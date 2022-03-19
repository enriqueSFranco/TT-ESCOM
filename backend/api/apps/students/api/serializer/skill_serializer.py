from rest_framework import serializers
from apps.students.models import Skill

class SkillSerializer(serializers.ModelSerializer):
  t100_boleta=serializers.StringRelatedField(many=True,read_only=True)
  class Meta:
    model=Skill
    fields="__all__"


class SkillListSerializer(serializers.ModelSerializer):
  t100_boleta=serializers.StringRelatedField(many=True,read_only=True)
  class Meta:
    model = Skill

  def to_representation(self, instance):
    return {
      "t102_id_skill": instance["t102_id_skill"],
      "t102_description": instance["t102_description"],
      # "t100_boleta": instance["t100_boleta"]
    }