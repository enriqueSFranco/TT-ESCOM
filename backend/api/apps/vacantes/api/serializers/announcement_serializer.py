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
        depth = 2


class UpdateAnnouncementSerializer(serializers.ModelSerializer):
        class Meta:
            model = Announcement
            fields = ('t202_announcement','t202_description','t202_publish_date','t202_close_date','t202_link')
            #,'t301_id_recruiter','t400_id_admin')
        
        def update(self,instance,validate_data):
            u_announcement = super().update(instance,validate_data)
            u_announcement.save()
            return u_announcement



