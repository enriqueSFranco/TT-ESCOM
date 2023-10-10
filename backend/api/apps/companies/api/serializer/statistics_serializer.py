from rest_framework import serializers
from apps.vacantes.models import Vacant

class CompanyStatisticsSerializer(serializers.ModelSerializer):    
    TotalPublished = serializers.IntegerField()
    TotalActive = serializers.IntegerField()
    class Meta:
        model = Vacant
        fields = ("TotalPublished","TotalActive")
      