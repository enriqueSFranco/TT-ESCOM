from rest_framework.routers import DefaultRouter
from apps.administration.api.views.admin_viewset import AdminViewSet,OnHoldRecruitersViewSet,OnHoldCompaniesViewSet
from apps.administration.api.views.verifications_viewset import ValidateRecruiterViewSet,ActivateCompanyViewSet,ActivateVacantViewSet
from apps.administration.api.views.companies_viewset import ManagerViewCompanyViewSet
from apps.administration.api.views.comment_viewset import CommentViewset
router = DefaultRouter()

router.register(r'ValidateRecruiter',ValidateRecruiterViewSet,basename='ValidRecruiter')
router.register(r'ValidateCompany',ActivateCompanyViewSet,basename='ValidateCompany')
router.register(r'ValidateVacant',ActivateVacantViewSet,basename='ValidateVacant ')
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'OnHoldRecruiter',OnHoldRecruitersViewSet,basename='OnHoldRecruiters')
router.register(r'OnHoldCompany',OnHoldCompaniesViewSet,basename='OnHoldCompanies')
router.register(r'Companies',ManagerViewCompanyViewSet,basename='CompaniesManagerView')
router.register(r'SendObservation',CommentViewset,basename='SendVacantObservations')

urlpatterns=router.urls
