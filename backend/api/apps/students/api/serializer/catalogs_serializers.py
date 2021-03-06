from rest_framework import serializers
from apps.students.models import AcademicLevel,AcademicState,AcademicUnit,InterestJob,Plataform,Skills,Lenguage,ProjectType

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

    def to_representation(self,instance):
        return{
            'c107_id_academic_level' : instance['c107_id_academic_level'],
	        'c107_description' : instance['c107_description']
        }



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

    def to_representation(self,instance):
        return{
            'c109_id_academic_state' : instance['c109_id_academic_state'],
	        'c109_description' : instance['c109_description']
        }


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

    def to_representation(self,instance):
        return{
            'c108_id_academic_unit' : instance['c108_id_academic_unit'],
	        'c108_academic_unit' : instance['c108_academic_unit']
        }        


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

    def to_representation(self,instance):
        return{
            'c111_id_job' : instance['c111_id_job'],
	        'c111_job' : instance['c111_job']
        }




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

    def to_representation(self,instance):
        return{
            'c115_id_plataform' : instance['c115_id_plataform'],
	        'c115_description' : instance['c115_description']
        }



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

    def to_representation(self,instance):
        return{
            'c116_id_skill' : instance['c116_id_skill'],
	        'c116_description' : instance['c116_description'],
            'c116_type' : instance['c116_type']
        }




class LenguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lenguage
        fields = '__all__'
    
    def create(self,validate_data):
        register = Lenguage(**validate_data)
        register.save()
        return register
    
class LenguageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lenguage
        fields = '__all__'

    def to_representation(self,instance):
        return{
            'c111_id_lenguage' : instance['c111_id_lenguage'],
	        'c111_description' : instance['c111_description']
        }

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

    def to_representation(self,instance):
        return{
            'c118_id_type' : instance['c118_id_type'],
	        'c118_description' : instance['c118_description']
        }