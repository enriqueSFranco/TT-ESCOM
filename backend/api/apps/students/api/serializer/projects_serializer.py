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
            fields =('t100_id_student','t117_group','t117_job','t117_link','t117_description','t117_start_date','t117_end_date')
        
        def update(self,instance,validate_data):
            update_project = super().update(instance,validate_data)
            update_project.save()
            return update_project



