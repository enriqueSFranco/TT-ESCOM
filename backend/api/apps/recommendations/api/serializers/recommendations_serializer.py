from rest_framework import serializers
from apps.recommendations.models import Recommendation

class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = "__all__"
    
    def create(self,validate_data):
        recommendation = Recommendation(**validate_data)
        recommendation.save()
        return recommendation
    
class RecommendationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'
        #depth = 2