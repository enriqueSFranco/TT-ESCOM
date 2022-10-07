from rest_framework import serializers
from apps.companies.models import Recruiter,Company,PDFBase64File

class CompanyListSerializer(serializers.ModelSerializer):
    OnHoldVacants = serializers.IntegerField()
    OnHoldRecruiters = serializers.IntegerField()
    class Meta:
        model = Company
        fields = '__all__'
        depth = 2

class CompanyRetriveSerializer(serializers.ModelSerializer):
    TotalVacants = serializers.IntegerField()
    #ReportedVacants = serializers.IntegerField()
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

#Hacer serializador para activar el usuario y asignarle contraseña

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
