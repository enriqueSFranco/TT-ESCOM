from rest_framework import serializers
from apps.students.models import Link

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'
    
    def create(self,validate_data):
        StudentLink = Link(**validate_data)
        StudentLink.save()
        return StudentLink
    
class LinkListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't100_boleta' : instance['t100_boleta'],
	        't113_link' : instance['t113_link']
        }

class UpdateLinkSerializer(serializers.ModelSerializer):
        class Meta:
            model = Link
            fields = ('t100_boleta','t113_link')
     
        def update(self,instance,validate_data):
            update_StudentLink = super().update(instance,validate_data)
            update_StudentLink.save()



