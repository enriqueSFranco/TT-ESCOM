from rest_framework import serializers
from apps.administration.models import Admin

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'
    
    def create(self,validate_data):
        new_admin = Admin(**validate_data)
        print(new_admin)
        new_admin.save()
        return new_admin
    
    #def validate(self, data):
    #    # custom validation
    #    print("value:",data)
    #    if data['t400_email'] == '':
    #        raise serializers.ValidationError('Sin datos')
    #    if Admin.objects.filter(t400_email=data['t400_email']):
    #      raise serializers.ValidationError("Correo ya registrado")
    #    return data['t400_email']
    
class AdminListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'    

class UpdateAdminSerializer(serializers.ModelSerializer):
        class Meta:
            model = Admin
            fields = ('t400_name','t400_last_names','t400_position')
        
        def update(self,instance,validate_data):
            u_admin = super().update(instance,validate_data)
            u_admin.save()
            return u_admin



