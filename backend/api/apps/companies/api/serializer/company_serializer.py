from rest_framework import serializers
from apps.companies.models import Company

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('t300_id_company','t300_name','t300_rfc','t300_email','t300_bussiness_name',
        't300_web_page','t300_mision','t300_vision','t300_objective','t400_id_admin',
        't300_create_date','t300_verified')
    
    def create(self,validate_data):
        new_company = Company(**validate_data)
        new_company.save()
        return new_company
    
class CompanyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        depth = 2
    

class UpdateCompanySerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t300_name','t300_rfc','t300_email','t300_bussiness_name','t300_web_page','t300_mision',
            't300_vision','t300_objective','t400_id_admin')

        def update(self,instance,validate_data):
            u_company = super().update(instance,validate_data)
            u_company.save()
            return u_company


#t300_verified,t400_id_admin
class VerifiedStateUpdate(serializers.ModelSerializer):
        class Meta:
            model = Company
            exclude = ('t300_id_company','t300_name','t300_rfc','t300_email','t300_bussiness_name',
            't300_web_page','t300_mision','t300_vision','t300_objective','t300_logo','t300_banner',
            't300_create_date','is_active')

        def update(self,instance,validate_data):
            validate_company = super().update(instance,validate_data)
            validate_company.save()
            return validate_company

