from rest_framework import serializers
from apps.vacantes.models import VacantStatus,CandidateProfile,Experience,ApplicationState,ReportType,ReportState,Locality,Contract

class VacantStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacantStatus
        fields = '__all__'
    
    def create(self,validate_data):
        register = VacantStatus(**validate_data)
        register.save()
        return register
    
class VacantStatusListSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacantStatus
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c204_id_status' : instance['c204_id_status'],
	        'c204_description' : instance['c204_description']
        }



class CandidateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateProfile
        fields = '__all__'
    
    def create(self,validate_data):
        register = CandidateProfile(**validate_data)
        register.save()
        return register
    
class CandidateProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateProfile
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c206_id_profile' : instance['c206_id_profile'],
	        'c206_description' : instance['c206_description']
        }




class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
    
    def create(self,validate_data):
        register = Experience(**validate_data)
        register.save()
        return register
    
class ExperienceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c207_id_experience' : instance['c207_id_experience'],
	        'c207_description' : instance['c207_description']
        }



class ApplicationStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationState
        fields = '__all__'
    
    def create(self,validate_data):
        register = ApplicationState(**validate_data)
        register.save()
        return register
    
class ApplicationStateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationState
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c205_id_application_state' : instance['c205_id_application_state'],
	        'c205_description' : instance['c205_description']
        }




class ReportTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportType
        fields = '__all__'
    
    def create(self,validate_data):
        register = ReportType(**validate_data)
        register.save()
        return register
    
class ReportTypeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportType
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c210_id_report_type' : instance['c210_id_report_type'],
	        'c210_description' : instance['c210_description']
        }



class ReportStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportState
        fields = '__all__'
    
    def create(self,validate_data):
        register = ReportState(**validate_data)
        register.save()
        return register
    
class ReportStateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportState
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c220_id_report_state' : instance['c220_id_report_state'],
	        'c220_description' : instance['c220_description']
        }


class LocalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Locality
        fields = '__all__'
    
    def create(self,validate_data):
        register = Locality(**validate_data)
        register.save()
        return register
    
class LocalityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locality
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c222_id' : instance['c222_id'],
            'c222_cp' : instance['c222_cp'],
            'c222_state' : instance['c222_state'],
            'c222_municipality' : instance['c222_municipality'],
            'c222_locality' : instance['c222_locality']
        }

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'
    
    def create(self,validate_data):
        register = Contract(**validate_data)
        register.save()
        return register
    
class ContractListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c208_id_contract' : instance['c208_id_contract'],
            'c208_description' : instance['c208_description']
        }        