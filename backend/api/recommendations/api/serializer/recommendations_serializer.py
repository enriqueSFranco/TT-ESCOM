from rest_framework import serializers

#
#class ApplicationSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Application
#        fields = ('t200_id_vacant','t100_id_student','c205_id_application_state','t201_date_application')        
#    
#    def create(self,validate_data):
#        aplication = Application(**validate_data)
#        aplication.save()
#        return aplication
#    
#class ApplicationListSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Application
#        fields = '__all__'
#        depth = 2
#