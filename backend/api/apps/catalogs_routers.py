from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.students.api.views.catalogs_viewset import AcademicLevelViewSet,AcademicStateViewSet,PlataformViewSet,SkillsViewSet,LanguageViewSet,InterestJobViewSet,AcademicUnitViewSet,ProjectTypeViewSet
from apps.vacantes.api.views.catalogs_viewset import VacantStatusViewSet,CandidateProfileViewSet,ExperienceViewSet,ApplicationStateViewSet,ReportTypeViewSet,ReportStateViewSet,LocalityViewSet,ContractViewSet,ReportStateViewSet,ModalityViewSet,RequiredLevelViewSet
from apps.administration.api.views.catalogs_viewset import RolViewSet

router = DefaultRouter()

#ReportStateViewSet
router.register(r'CatalogueAcademicLevel',AcademicLevelViewSet,basename='Academic level catalog')
router.register(r'CatalogueAcademicState',AcademicStateViewSet,basename='Academic state catalog')
router.register(r'CataloguePlataform',PlataformViewSet,basename='Plataforms catalog')
router.register(r'CatalogueJobs',InterestJobViewSet,basename='Jobs catalog')
router.register(r'CatalogueSkills',SkillsViewSet,basename='Skills catalog')
router.register(r'CatalogueLanguage',LanguageViewSet,basename='Languages catalog')
router.register(r'CatalogueVacantStatus',VacantStatusViewSet,basename='Vacant status catalog')
router.register(r'CatalogueReportStateViewSet',ReportStateViewSet,basename='Report status catalog')
router.register(r'CatalogueCandidateProfile',CandidateProfileViewSet,basename='Candidate profile catalog')
router.register(r'CatalogueExperience',ExperienceViewSet,basename='Experience catalog')
router.register(r'CatalogueApplicationState',ApplicationStateViewSet,basename='Application status catalog')
router.register(r'CatalogueReportType',ReportTypeViewSet,basename='Report type catalog')
router.register(r'CatalogueReportState',ReportStateViewSet,basename='Report status catalog')
router.register(r'WorkModalities',ModalityViewSet,basename='Modality options')
router.register(r'AcademicUnits',AcademicUnitViewSet,basename='Academic Units')
router.register(r'Localities',LocalityViewSet,basename='Localities')
router.register(r'Contracts',ContractViewSet,basename='Contract types')
router.register(r'ProjectType',ProjectTypeViewSet,basename='Project types')
router.register(r'Rol',RolViewSet,basename='Manager rol types')
router.register(r'SkillsRequiredLevels',RequiredLevelViewSet,basename='Skills levels')


urlpatterns=router.urls
