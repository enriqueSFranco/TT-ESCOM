from rest_framework.routers import DefaultRouter
from apps.companies.api.views.company_viewset import CompanyViewSet
from apps.companies.api.views.recruiter_viewset import RecruiterViewSet
from apps.vacantes.api.views.vacant_viewset import RecruiterVacantViewSet

router = DefaultRouter()
router.register(r'Companies',CompanyViewSet,basename='Companies')
router.register(r'Recruiters',RecruiterViewSet,basename='Companies recruiters')
router.register(r'RecruiterVacants', RecruiterVacantViewSet, basename='Recruiters Vacants')

urlpatterns=router.urls
