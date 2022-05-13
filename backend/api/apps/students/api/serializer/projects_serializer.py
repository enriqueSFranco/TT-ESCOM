from rest_framework import serializers
from apps.students.models import PersonalProjects

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalProjects
        fields = '__all__'
    
    def create(self,validate_data):
        Project = PersonalProjects(**validate_data)
        Project.save()
        return Project
    
class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalProjects
        fields = '__all__'
        depth = 2


class UpdateProjectSerializer(serializers.ModelSerializer):
        class Meta:
            model = PersonalProjects
            exclude = ('t117_id_registrer','t100_id_student','t117_project_type')
        
        def update(self,instance,validate_data):
            update_project = super().update(instance,validate_data)
            update_project.save()
            return update_project



