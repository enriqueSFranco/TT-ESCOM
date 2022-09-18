from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.vacantes.api.views.announcement_viewset import AnnouncementViewSet
from apps.vacantes.api.views.application_viewset import ApplicationViewSet
from apps.vacantes.api.views.report_viewset import ReportViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.companies.api.views.company_viewset import ActivateCompanyViewSet
from apps.companies.api.views.auth_recruiter_viewset import ValidateRecruiterViewSet
#from apps.vacantes.api.views.vacant_viewset import VacantRequirementsViewSet,VacantLenguagesViewSet
from apps.vacantes.api.views.application_viewset import VacantApplicationsViewSet
from apps.vacantes.api.views.vacant_viewset import VacantInfoViewSet
from apps.vacantes.api.views.vacant_viewset import RecruiterVacantViewSet
from apps.vacantes.api.views.vacant_viewset import FilterVacantViewSet
from apps.vacantes.api.views.vacant_viewset import FilterVacant
from django.urls import path

router = DefaultRouter()
router.register(r'Vacants', VacantViewSet, basename='Vacants')

router.register(r'RecruiterVacants', RecruiterVacantViewSet, basename='Recruiters Vacants')
#router.register(r'VacantRequirements', VacantRequirementsViewSet, basename='Vacants requirements')
#router.register(r'VacantLenguages', VacantLenguagesViewSet, basename='Vacants lenguages')
router.register(r'Announcements',AnnouncementViewSet,basename='Announcements')
router.register(r'Applications',ApplicationViewSet,basename='Students Applications')
router.register(r'VacantApplications',VacantApplicationsViewSet,basename='Vacants Applications')
router.register(r'Reports',ReportViewSet,basename="Reports")
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'ValidateCompany',ActivateCompanyViewSet,basename='Validate company')
router.register(r'ValidateRecruiter',ValidateRecruiterViewSet,basename='Invalid recruiters')
router.register(r'VacantInfo',VacantInfoViewSet,basename='Vavcants info')
router.register(r'FilterVacants',FilterVacantViewSet,basename='Vacants filtered')
#router.register(r'<str:search>', FilterVacant,basename="Filter")

urlpatterns= router.urls 
