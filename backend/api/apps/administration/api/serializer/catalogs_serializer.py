from rest_framework import serializers
from apps.administration.models import Rol

class RolCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'
    
