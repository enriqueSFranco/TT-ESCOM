from rest_framework import serializers
from apps.students.models import AcademicLevel,AcademicState,AcademicUnit,InterestJob,Plataform,Skills,Language,ProjectType

class AcademicLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicLevel
        fields = '__all__'
    
    def create(self,validate_data):
        register = AcademicLevel(**validate_data)
        register.save()
        return register
    
class AcademicLevelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicLevel
        fields = '__all__'
    



class AcademicStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicState
        fields = '__all__'
    
    def create(self,validate_data):
        register = AcademicState(**validate_data)
        register.save()
        return register
    
class AcademicStateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicState
        fields = '__all__'




class AcademicUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicUnit
        fields = '__all__'
    
    def create(self,validate_data):
        register = AcademicUnit(**validate_data)
        register.save()
        return register
    
class AcademicUnitListSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicUnit
        fields = '__all__'



class InterestJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestJob
        fields = '__all__'
    
    def create(self,validate_data):
        register = InterestJob(**validate_data)
        register.save()
        return register
    
class InsterestJobListSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestJob
        fields = '__all__'
    




class PlataformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plataform
        fields = '__all__'
    
    def create(self,validate_data):
        register = Plataform(**validate_data)
        register.save()
        return register
    
class PlataformListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plataform
        fields = '__all__'
    



class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'
    
    def create(self,validate_data):
        register = Skills(**validate_data)
        register.save()
        return register
    
class SkillsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'
    




class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
    
    def create(self,validate_data):
        register = Language(**validate_data)
        register.save()
        return register
    
class LanguageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
    

#ProjectType

class ProjectTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectType
        fields = '__all__'
    
    def create(self,validate_data):
        register = ProjectType(**validate_data)
        register.save()
        return register
    
class ProjectTypeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectType
        fields = '__all__'
    