from rest_framework.routers import DefaultRouter
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.companies.api.views.company_viewset import ActivateCompanyViewSet
from apps.companies.api.views.auth_recruiter_viewset import ValidateRecruiterViewSet
router = DefaultRouter()
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'ValidateCompany',ActivateCompanyViewSet,basename='Validate company')
router.register(r'ValidateRecruiter',ValidateRecruiterViewSet,basename='Invalid recruiters')

urlpatterns=router.urls