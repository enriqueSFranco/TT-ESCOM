from rest_framework import serializers
from apps.vacantes.models import VacantStatus,CandidateProfile,Experience,ApplicationState,ReportType,ReportState,MState,Municipality

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


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MState
        fields = '__all__'
    
    def create(self,validate_data):
        register = MState(**validate_data)
        register.save()
        return register
    
class StateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MState
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c221_id_state' : instance['c221_id_state'],
	        'c221_state' : instance['c221_state']
        }        



class MunicipalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipality
        fields = '__all__'
    
    def create(self,validate_data):
        register = Municipality(**validate_data)
        register.save()
        return register
    
class MunicipalityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipality
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c221_id_state' : instance['c221_id_state'],
	        'c222_id_municipality' : instance['c222_id_municipality'],
            'c222_municipality' : instance['c222_municipality']
        }        