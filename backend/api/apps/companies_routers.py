from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.students.api.views.link_viewset import LinkViewSet
from apps.students.api.views.academichistory_viewset import HistorialViewSet
from apps.students.api.views.employmenthistory_viewset import EmploymentViewSet
from apps.students.api.views.studentlenguages_viewset import LenguagesViewSet
from apps.vacantes.api.views.announcement_viewset import AnnouncementViewSet
from apps.vacantes.api.views.application_viewset import ApplicationViewSet
from apps.vacantes.api.views.report_viewset import ReportViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.companies.api.views.company_viewset import CompanyViewSet
from apps.companies.api.views.ubication_viewset import CompanyUbicationViewSet
from apps.companies.api.views.recruiter_viewset import RecruiterViewSet
from apps.students.api.views.projects_viewset import ProjectsViewSet
from apps.companies.api.views.company_viewset import ActivateCompanyViewSet
from apps.companies.api.views.auth_recruiter_viewset import ValidateRecruiterViewSet
from apps.vacantes.api.views.vacant_viewset import RecruiterVacantViewSet
from apps.vacantes.api.views.vacant_viewset import VacantRequirementsViewSet,VacantLenguagesViewSet
from apps.vacantes.api.views.application_viewset import VacantApplicationsViewSet
from apps.vacantes.api.views.application_viewset import StudentApplicationsViewSet
from apps.vacantes.api.views.vacant_viewset import VacantInfoViewSet
from apps.students.api.views.certifcation_viewset import CertificationViewSet
from apps.vacantes.api.views.vacant_viewset import FilterVacantViewSet

router = DefaultRouter()
router.register(r'Companies',CompanyViewSet,basename='Companies')
router.register(r'Companies/<int:pk>',CompanyViewSet,basename='Company details')
router.register(r'CompaniesUbication',CompanyUbicationViewSet,basename='Companies ubications')
router.register(r'CompaniesUbication/<int:pk>',CompanyUbicationViewSet,basename='Company ubication')
router.register(r'Recruiters',RecruiterViewSet,basename='Companies recruiters')
router.register(r'Recruiters/<int:pk>',RecruiterViewSet,basename='Company recruiters details')

urlpatterns=router.urls
