from rest_framework import serializers
from apps.vacantes.models import Vacant
from apps.companies.models import Recruiter,Company,PDFBase64File

class CompanyListSerializer(serializers.ModelSerializer):
    TotalRecruiters = serializers.IntegerField()
    TotalVacants = serializers.IntegerField()
    TotalReports = serializers.IntegerField()
    class Meta:
        model = Company
        fields = '__all__'
        depth = 2

class CompanyRetriveSerializer(serializers.ModelSerializer):    
    OnHoldVacants = serializers.IntegerField()
    OnHoldRecruiters = serializers.IntegerField()
    class Meta:
        model = Company
        fields = '__all__'
        depth = 2        
    
class CompanySerializer(serializers.ModelSerializer):
    t300_validator_document = PDFBase64File()
    class Meta:
        model = Company
        fields = ('t300_name','t300_rfc','t300_bussiness_name','t300_validator_document')
    
    def create(self,validate_data):
        new_company = Company(**validate_data)
        new_company.save()
        return new_company    

class CompanyDataSerializer(serializers.ModelSerializer):
    #OnHoldVacant = serializers.IntegerField()
    class Meta:
        model = Company
        fields = "__all__"
        depth = 2

class RecruiterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'    
        depth = 2


class ValidateRecruiterSerializer(serializers.ModelSerializer):
        class Meta:
            model = Recruiter
            fields = ('c303_id_status','id_user')
        
        def update(self,instance,validate_data):
            u_recruiter = super().update(instance,validate_data)
            #Crear contraseña perrona
            u_recruiter.save()
            return u_recruiter
#Hacer serializador para cambiar contraseña


class OnHoldRecruiterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'
        depth = 2


#t400_id_admin
class ValidateCompanySerializer(serializers.ModelSerializer):
        class Meta:
            model = Company
            fields = ('t400_id_admin','t300_create_date','c302_id_status')

        def update(self,instance,validate_data):
            validate_company = super().update(instance,validate_data)
            validate_company.save()
            return validate_company



class OnHoldVacantsSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Vacant
        fields = '__all__'
        depth = 2

class ValidateVacantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacant
        fields = ('t400_id_admin','c204_id_vacant_status','t200_close_date','t200_publish_date')       



class OnHoldCompanyListSerializer(serializers.ModelSerializer):        
    RecruiterCompany = RecruiterListSerializer(many=True, read_only=True)
    class Meta:
        model = Company
        fields = '__all__'
        depth = 2