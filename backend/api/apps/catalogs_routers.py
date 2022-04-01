from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.students.api.views.catalogs_viewset import AcademicLevelViewSet,AcademicStateViewSet,PlataformViewSet,SkillsViewSet,LenguageViewSet
from apps.vacantes.api.views.catalogs_viewset import VacantStatusViewSet,CandidateProfileViewSet,ExperienceViewSet,ApplicationStateViewSet,ReportTypeViewSet,ReportStateViewSet,StateViewSet,MunicipalityViewSet


router = DefaultRouter()

router.register(r'CatalogueAcademicLevel',AcademicLevelViewSet,basename='Academic level catalog')
router.register(r'CatalogueAcademicState',AcademicStateViewSet,basename='Academic state catalog')
router.register(r'CataloguePlataform',PlataformViewSet,basename='Plataforms catalog')
router.register(r'CatalogueSkills',SkillsViewSet,basename='Skills catalog')
router.register(r'CatalogueSkills/<str:pk>',SkillsViewSet,basename='Skills divided by types catalog')
router.register(r'CatalogueLenguage',LenguageViewSet,basename='Lenguages catalog')
router.register(r'CatalogueVacantStatus',VacantStatusViewSet,basename='Vacant status catalog')
router.register(r'CatalogueCandidateProfile',CandidateProfileViewSet,basename='Candidate profile catalog')
router.register(r'CatalogueExperience',ExperienceViewSet,basename='Experience catalog')
router.register(r'CatalogueApplicationState',ApplicationStateViewSet,basename='Application status catalog')
router.register(r'CatalogueReportType',ReportTypeViewSet,basename='Report type catalog')
router.register(r'CatalogueReportState',ReportStateViewSet,basename='Report status catalog')
router.register(r'States',StateViewSet,basename='States catalog')
router.register(r'Municipalities',MunicipalityViewSet,basename='Municipalities catalog')
router.register(r'CatalogueSkills/<str:pk>',SkillsViewSet,basename='Skills divided by types catalog')

urlpatterns=router.urls
