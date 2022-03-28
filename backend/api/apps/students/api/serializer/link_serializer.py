from rest_framework import serializers
from apps.students.models import Link

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'
        depth = 2
    
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
            't114_id_registrer': instance['t114_id_registrer'],
            't100_boleta' : instance['t100_boleta'],
	        't113_link' : instance['t113_link'],
            'c115_id_plataform': instance['c115_id_plataform']
        }

class UpdateLinkSerializer(serializers.ModelSerializer):
        class Meta:
            model = Link
            fields = ('t114_id_registrer','t100_boleta','t113_link','c115_id_plataform')
     
        def update(self,instance,validate_data):
            update_StudentLink = super().update(instance,validate_data)
            update_StudentLink.save()
            return update_StudentLink



