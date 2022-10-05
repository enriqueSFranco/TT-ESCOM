from rest_framework import serializers
from apps.companies.models import Recruiter,Company

class CompanyDataSerializer(serializers.ModelSerializer):
    OnHoldVacant = serializers.IntegerField()
    class Meta:
        model = Company
        fields = ('OnHoldVacant','t300_id_company','t300_name','t300_rfc','t300_email','t300_bussiness_name','t300_web_page','t300_mision',
        't300_vision','t300_objective','t300_logo','t300_banner','t300_validator_document','t400_id_admin','t300_verified',
        't300_create_date','is_active')
        depth = 2

class RecruiterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'    
        depth = 2