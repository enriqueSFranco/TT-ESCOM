from rest_framework import serializers
from apps.companies.models import Ubication

class UbicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubication
        fields = '__all__'
    
    def create(self,validate_data):
        new_ubication = Ubication(**validate_data)
        new_ubication.save()
        return new_ubication
    
class UbicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubication
        fields = '__all__'
        depth = 2

    """def to_representation(self,instance):
        print(instance)
        return{
            't300_id_company' : instance['t300_id_company'],
            't302_state' : instance['t302_state'],
            't302_municipality' : instance['t302_municipality'],
            't302_locality' : instance['t302_locality'],
            't302_street' : instance['t302_street'],
            't302_cp' : instance['t302_cp'],
            't302_ext' : instance['t302_ext'],
            't302_int' : instance['t302_int']
        }"""

class UpdateUbicationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Ubication
            fields = ('t300_id_company','t302_state','t302_municipality','t302_locality','t302_street','t302_cp','t302_ext','t302_int')
        
        def update(self,instance,validate_data):
            u_ubication = super().update(instance,validate_data)
            u_ubication.save()
            return u_ubication



