from rest_framework import serializers
from apps.vacantes.models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        deptg = 2
    
    def create(self,validate_data):
        new_report = Comment(**validate_data)
        new_report.save()
        return new_report
    
class CommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 2





