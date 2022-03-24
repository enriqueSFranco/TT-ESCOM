from rest_framework import serializers
from apps.administration.models import Admin

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'
    
    def create(self,validate_data):
        new_admin = Admin(**validate_data)
        new_admin.save()
        return new_admin
    
class AdminListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

    def to_representation(self,instance):
        print(instance)
        return{
            't400_id_admin': instance['t400_id_admin'],
            't400_name': instance['t400_name'],
            't400_last_names': instance['t400_last_names'],
            't400_password': instance['t400_password'],
            't400_position': instance['t400_position']
        }

class UpdateAdminSerializer(serializers.ModelSerializer):
        class Meta:
            model = Admin
            fields = ('t400_id_admin','t400_name','t400_last_names','t400_password','t400_position')
        
        def update(self,instance,validate_data):
            u_admin = super().update(instance,validate_data)
            u_admin.save()
            return u_admin



