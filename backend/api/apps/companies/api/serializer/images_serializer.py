from rest_framework import serializers
from apps.companies.models import Company

class CompanyLogoSerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t300_id_company','t300_logo')
        
        def update(self,instance,validate_data):
            u_logo = super().update(instance,validate_data)
            u_logo.save()
            return u_logo

class CompanyBannerSerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t300_id_company','t300_banner')
        
        def update(self,instance,validate_data):
            u_banner = super().update(instance,validate_data)
            u_banner.save()
            return u_banner            



