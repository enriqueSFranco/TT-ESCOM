from rest_framework.routers import DefaultRouter
from apps.companies.api.views.company_viewset import CompanyViewSet
from apps.companies.api.views.recruiter_viewset import RecruiterViewSet
from apps.vacantes.api.views.vacant_viewset import RecruiterVacantViewSet
from apps.companies.api.views.files_viewsets import ValidationDocumentViewSet
from apps.companies.api.views.comment_viewset import CommentViewset

router = DefaultRouter()
router.register(r'Companies',CompanyViewSet,basename='Companies')
router.register(r'Recruiters',RecruiterViewSet,basename='Companies recruiters')
router.register(r'RecruiterVacants', RecruiterVacantViewSet, basename='Recruiters Vacants')
router.register(r'UploadFile',ValidationDocumentViewSet,basename='Upload Company Validator File')
router.register(r'SendComment',CommentViewset,basename='Send observation comment')

urlpatterns=router.urls
