from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.students.api.views.catalogs_viewset import AcademicLevelViewSet,AcademicStateViewSet,PlataformViewSet,SkillsViewSet,LenguageViewSet
from apps.vacantes.api.views.catalogs_viewset import VacantStatusViewSet,CandidateProfileViewSet,ExperienceViewSet,ApplicationStateViewSet,ReportTypeViewSet,ReportStateViewSet


router = DefaultRouter()

router.register(r'catalogs/CatalogueAcademicLevel',AcademicLevelViewSet,basename='Academic level catalog')
router.register(r'catalogs/CatalogueAcademicState',AcademicStateViewSet,basename='Academic state catalog')
router.register(r'catalogs/CataloguePlataform',PlataformViewSet,basename='Plataforms catalog')
router.register(r'catalogs/CatalogueSkills',SkillsViewSet,basename='Skills catalog')
router.register(r'catalogs/CatalogueLenguage',LenguageViewSet,basename='Lenguages catalog')
router.register(r'catalogs/CatalogueVacantStatus',VacantStatusViewSet,basename='Vacant status catalog')
router.register(r'catalogs/CatalogueCandidateProfile',CandidateProfileViewSet,basename='Candidate profile catalog')
router.register(r'catalogs/CatalogueExperience',ExperienceViewSet,basename='Experience catalog')
router.register(r'catalogs/CatalogueApplicationState',ApplicationStateViewSet,basename='Application status catalog')
router.register(r'catalogs/CatalogueReportType',ReportTypeViewSet,basename='Report type catalog')
router.register(r'catalogs/CatalogueReportState',ReportStateViewSet,basename='Report status catalog')


urlpatterns=router.urls
