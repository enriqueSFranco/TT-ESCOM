from rest_framework.routers import DefaultRouter
from apps.companies.api.views.company_viewset import CompanyViewSet
from apps.companies.api.views.recruiter_viewset import RecruiterViewSet

router = DefaultRouter()
router.register(r'Companies',CompanyViewSet,basename='Companies')
router.register(r'Companies/<int:pk>',CompanyViewSet,basename='Company details')
router.register(r'Recruiters',RecruiterViewSet,basename='Companies recruiters')
router.register(r'Recruiters/<int:pk>',RecruiterViewSet,basename='Company recruiters details')

urlpatterns=router.urls
