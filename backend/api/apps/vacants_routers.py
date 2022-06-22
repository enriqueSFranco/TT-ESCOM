from rest_framework.routers import DefaultRouter
from apps.vacantes.api.views.announcement_viewset import AnnouncementViewSet
from apps.vacantes.api.views.application_viewset import ApplicationViewSet
from apps.vacantes.api.views.report_viewset import ReportViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.companies.api.views.company_viewset import ActivateCompanyViewSet
from apps.companies.api.views.auth_recruiter_viewset import ValidateRecruiterViewSet
from apps.vacantes.api.views.vacant_viewset import VacantRequirementsViewSet,VacantLenguagesViewSet
from apps.vacantes.api.views.application_viewset import VacantApplicationsViewSet
from apps.vacantes.api.views.vacant_viewset import VacantInfoViewSet
from apps.vacantes.api.views.vacant_viewset import RecruiterVacantViewSet
from apps.vacantes.api.views.vacant_viewset import FilterVacantViewSet

router = DefaultRouter()
router.register(r'Vacants', VacantViewSet, basename='Vacants')
router.register(r'Vacant/<int:pk>', VacantViewSet, basename='Vacant detail')
router.register(r'RecruiterVacants', RecruiterVacantViewSet, basename='Recruiters Vacants')
router.register(r'RecruiterVacants/<int:pk>', RecruiterVacantViewSet, basename='Recruiter Vacants')
router.register(r'VacantRequirements', VacantRequirementsViewSet, basename='Vacants requirements')
router.register(r'VacantRequirements/<int:pk>', VacantRequirementsViewSet, basename='Vacant requirements')
router.register(r'VacantLenguages', VacantLenguagesViewSet, basename='Vacants lenguages')
router.register(r'VacantLenguages/<int:pk>', VacantLenguagesViewSet, basename='Vacant lenguages')
router.register(r'Announcements',AnnouncementViewSet,basename='Announcements')
router.register(r'Announcement/<int:pk>',AnnouncementViewSet,basename='Announcement details')
router.register(r'Applications',ApplicationViewSet,basename='Students Applications')
router.register(r'Applications/<int:pk>',ApplicationViewSet,basename='Student Applications details')
router.register(r'VacantApplications',VacantApplicationsViewSet,basename='Vacants Applications')
router.register(r'VacantApplications/<int:pk>',VacantApplicationsViewSet,basename='Vacant Applications')
router.register(r'Reports',ReportViewSet,basename="Reports")
router.register(r'Reports/<int:pk>',ReportViewSet,basename="Report details")
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'Administrator/<int:pk>',AdminViewSet,basename='Administrator Details')
router.register(r'ValidateCompany',ActivateCompanyViewSet,basename='Validate company')
router.register(r'ValidateCompany/<int:pk>',ActivateCompanyViewSet,basename='Validate company')
router.register(r'ValidateRecruiter',ValidateRecruiterViewSet,basename='Invalid recruiters')
router.register(r'ValidateRecruiter/<int:pk>',ValidateRecruiterViewSet,basename='Validate recruite')
router.register(r'VacantInfo',VacantInfoViewSet,basename='Vavcants info')
router.register(r'VacantInfo/<int:pk>',VacantInfoViewSet,basename='Vavcant info')
router.register(r'FilterVacants',FilterVacantViewSet,basename='Vavcants filtered')

urlpatterns=router.urls
