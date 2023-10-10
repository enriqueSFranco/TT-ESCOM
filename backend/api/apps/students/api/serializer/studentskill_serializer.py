from rest_framework import serializers
from apps.students.models import StudentSkill,Skills
from apps.students.api.views.catalogs_viewset import SkillsSerializer

class SkillSerializer(serializers.ModelSerializer):
  class Meta:
    model=StudentSkill
    fields='__all__'


class SkillListSerializer(serializers.ModelSerializer):
  class Meta:
    model = StudentSkill
    fields='__all__'
    depth = 2

  """def to_representation(self, instance):
    return {
      "t102_id_registrer": instance["t102_id_registrer"],
      "c116_id_skill": instance["c116_id_skill"],
      "t100_boleta": instance["t100_boleta"]
    }
"""

class UpdateStudentSkillSerializer(serializers.ModelSerializer):
        class Meta:
            model = StudentSkill
            fields = ('c116_id_skill',)
     
        def update(self,instance,validate_data):
            update_skill = super().update(instance,validate_data)
            update_skill.save()
            return update_skill