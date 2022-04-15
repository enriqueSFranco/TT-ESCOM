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
from apps.vacantes.api.views.ubication_viewset import UbicationViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.administration.api.views.admin_viewset import AdminViewSet
from apps.companies.api.views.company_viewset import CompanyViewSet
from apps.companies.api.views.ubication_viewset import CompanyUbicationViewSet
from apps.companies.api.views.recruiter_viewset import RecruiterViewSet
from apps.students.api.views.projects_viewset import ProjectsViewSet
from apps.users.views import UserViewSet

router = DefaultRouter()
router.register(r'users',UserViewSet,basename='Registred users')
router.register(r'Students', StudentViewSet, basename='Students')
router.register(r'Student/<int:pk>', StudentViewSet, basename='Student details')
router.register(r'Skills', SkillViewSet, basename='Students skills')
router.register(r'Skills/<int:pk>', SkillViewSet, basename='Student skills details')
router.register(r'Links', LinkViewSet, basename='Students links')
router.register(r'Links/<int:pk>', LinkViewSet, basename='Student links')
#router.register(r'DeleteLink/<int:pk>/<str:link>', LinkViewSet, basename='delete student link')
router.register(r'AcademicHistorial',HistorialViewSet,basename='Students academic historial')
router.register(r'AcademicHistorial/<int:pk>',HistorialViewSet,basename='Student academic historial details')
router.register(r'EmploymentHistorial',EmploymentViewSet,basename='Students employment historial')
router.register(r'EmploymentHistorial/<int:pk>',EmploymentViewSet,basename='Student employment historial')
router.register(r'StudentsLenguages',LenguagesViewSet,basename='Students lenguages')
router.register(r'StudentLenguages/<int:pk>',LenguagesViewSet,basename='Student lenguages details')
router.register(r'StudentsProjects',ProjectsViewSet,basename='Students personal projects')
router.register(r'StudentsProject/<int:pk>',ProjectsViewSet,basename='Student personal projects')
router.register(r'Vacants', VacantViewSet, basename='Vacants')
router.register(r'Vacant/<int:pk>', VacantViewSet, basename='Vacant detail')
router.register(r'Announcements',AnnouncementViewSet,basename='Announcements')
router.register(r'Announcement/<int:pk>',AnnouncementViewSet,basename='Announcement details')
router.register(r'Applications',ApplicationViewSet,basename='Students Applications')
router.register(r'Applications/<int:pk>',ApplicationViewSet,basename='Student Applications details')
router.register(r'Reports',ReportViewSet,basename="Reports")
router.register(r'Reports/<int:pk>',ReportViewSet,basename="Report details")
router.register(r'VacantsUbications',UbicationViewSet,basename="Vacants ubications")
router.register(r'VacantsUbications/<int:pk>',UbicationViewSet,basename="Vacant ubication details")
router.register(r'Administrators',AdminViewSet,basename='Adminstrators')
router.register(r'Administrator/<int:pk>',AdminViewSet,basename='Administrator Details')
router.register(r'Companies',CompanyViewSet,basename='Companies')
router.register(r'Companies/<int:pk>',CompanyViewSet,basename='Company details')
router.register(r'CompaniesUbication',CompanyUbicationViewSet,basename='Companies ubications')
router.register(r'CompaniesUbication/<int:pk>',CompanyUbicationViewSet,basename='Company ubication')
router.register(r'Recruiters',RecruiterViewSet,basename='Companies recruiters')
router.register(r'Recruiters/<int:pk>',RecruiterViewSet,basename='Company recruiters details')


urlpatterns=router.urls
