from rest_framework import serializers
from apps.vacantes.models import Announcement

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'
    
    def create(self,validate_data):
        announcement = Announcement(**validate_data)
        announcement.save()
        return announcement
    
class AnnouncementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

    def to_representation(self,instance):
        return{
            't202_id_announcement' : instance['t202_id_announcement'],
            't202_announcement' : instance['t202_announcement'],
            'T202_description' : instance['T202_description'],
            #'t300_id_company' : instance['t300_id_company'],
            't202_publish_date' : instance['t202_publish_date'],
            't202_close_date' : instance['t202_close_date']#,
            #'t400_id_administrador' : instance['t400_id_administrador']
        }

class UpdateAnnouncementSerializer(serializers.ModelSerializer):
        class Meta:
            model = Announcement
            fields = ('t202_id_announcement','t202_announcement','T202_description','t202_publish_date','t202_close_date')
        
        def update(self,instance,validate_data):
            u_announcement = super().update(instance,validate_data)
            u_announcement.save()



