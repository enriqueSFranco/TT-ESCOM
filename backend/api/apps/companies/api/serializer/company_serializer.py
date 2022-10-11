from rest_framework import serializers
from apps.companies.models import Company,PDFBase64File


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('t300_name','t300_rfc','t300_bussiness_name','c302_id_status')
    
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
            't300_vision','t300_objective')

        def update(self,instance,validate_data):
            u_company = super().update(instance,validate_data)
            u_company.save()
            return u_company



