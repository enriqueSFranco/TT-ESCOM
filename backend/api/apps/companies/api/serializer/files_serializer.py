from rest_framework import serializers
from apps.companies.models import Company,PDFBase64File

class CompanyLogoSerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t300_id_company','t300_logo')
        
        def update(self,instance,validate_data):
            u_logo = super().update(instance,validate_data)
            u_logo.save()
            return u_logo

class CompanyFileSerializer(serializers.ModelSerializer):
    t300_validator_document = PDFBase64File()
    class Meta:
        model = Company
        exclude = ('t300_id_company','t300_name','t300_rfc','t300_email','t300_bussiness_name',
        't300_web_page','t300_mision','t300_vision','t300_objective','t300_logo','t300_banner',
        't400_id_admin','t300_verified','t300_create_date','c302_id_status')

class CompanyBannerSerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t300_id_company','t300_banner')
        
        def update(self,instance,validate_data):
            u_banner = super().update(instance,validate_data)
            u_banner.save()
            return u_banner            



