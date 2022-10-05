from rest_framework.routers import DefaultRouter
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.administration.api.views.verifications_viewset import ValidateRecruiterViewSet,OnHoldRecruitersViewSet
from apps.administration.api.views.companies_viewset import CompanyViewSet
router = DefaultRouter()
#router.register(r'OnHoldRecruiter',OnHoldRecruitersViewSet,basename='OnHoldRecruiter')
#router.register(r'ValidateRecruiter',ValidateRecruiterViewSet,basename='Invalidrecruiter')
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'OnHoldRecruiter',OnHoldRecruitersViewSet,basename='OnHold')
router.register(r'Company',CompanyViewSet,basename='Companies')

urlpatterns=router.urls
