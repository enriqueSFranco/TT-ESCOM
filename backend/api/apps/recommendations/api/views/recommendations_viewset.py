from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from apps.recommendations.algorithms.vacant_recomendation import candidate_recomendation

from apps.recommendations.models import Recommendation
from apps.recommendations.api.serializers.recommendations_serializer import RecommendationSerializer,RecommendationListSerializer

class RecommendationsViewsets(viewsets.GenericViewSet):
    model = Recommendation
    serializer_class = RecommendationSerializer
    list_serializer_class = RecommendationListSerializer
    queryset = None

    def get_queryset(self):
        if self.queryset is None:
            self.queryset = self.model.objects.filter().order_by('-t500_percentage').all()
        return self.queryset
	
    def get_object(self, pk):	
        self.queryset = self.model.objects\
				.filter(t100_id_student = pk).order_by('-t500_percentage')\
				.all()
        return self.queryset

    def list(self, request):
        #print(request.data)        
        recommendations = self.get_queryset()
        recommendations_serializer = self.list_serializer_class(recommendations, many=True)        
        return Response(recommendations_serializer.data, status=status.HTTP_200_OK)
	
    def retrieve(self, request, pk):
        candidate_recomendation(pk)
        applications = self.get_object(pk)
        applications_serializer = self.list_serializer_class(applications,many=True)
        return Response(applications_serializer.data)
    """

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t200_id_vacant = pk, c205_id_application_state__in=['1','2','4'])\
				.all()#values('t201_id_application','t100_boleta','c205_id_application_state','t201_date_application','t201_cv')		
		return self.queryset
	


	def list(self, request):
        #print(request.data)
		applications = self.get_queryset()
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)
		

class StudentApplicationsViewSet(viewsets.GenericViewSet):
	model = Application
	serializer_class = ApplicationSerializer
	list_serializer_class = ApplicationListSerializer
	queryset = None

	def get_object(self, pk):	
		self.queryset = self.model.objects\
				.filter(t100_id_student = pk)\
				.all()
		return self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset


	def list(self, request):
        #print(request.data)
		applications = self.get_queryset()
		applications_serializer = self.list_serializer_class(applications, many=True)        
		return Response(applications_serializer.data, status=status.HTTP_200_OK)
		
	def retrieve(self, request, pk):
		applications = self.get_object(pk)
		applications_serializer = self.list_serializer_class(applications,many=True)
		return Response(applications_serializer.data)

"""