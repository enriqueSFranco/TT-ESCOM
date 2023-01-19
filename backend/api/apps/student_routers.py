from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.students.api.views.link_viewset import LinkViewSet
from apps.students.api.views.academichistory_viewset import HistorialViewSet
from apps.students.api.views.employmenthistory_viewset import EmploymentViewSet
from apps.students.api.views.studentlanguages_viewset import LanguagesViewSet
from apps.students.api.views.projects_viewset import ProjectsViewSet
from apps.vacantes.api.views.application_viewset import StudentApplicationsViewSet
from apps.students.api.views.certifcation_viewset import CertificationViewSet
from apps.students.api.views.files_viewsets import StudentImageViewSet
from apps.students.api.views.files_viewsets import CVViewSet
from apps.recommendations.api.views.recommendations_viewset import RecommendationsViewsets

router = DefaultRouter()
router.register(r'Students', StudentViewSet, basename='Students')
router.register(r'Skills', SkillViewSet, basename='Students skills')
router.register(r'Links', LinkViewSet, basename='Students links')
router.register(r'AcademicHistorial',HistorialViewSet,basename='Students academic historial')
router.register(r'EmploymentHistorial',EmploymentViewSet,basename='Students employment historial')
router.register(r'StudentsLanguages',LanguagesViewSet,basename='Students languages')
router.register(r'StudentsProjects',ProjectsViewSet,basename='Students personal projects')
router.register(r'StudentsCertifications',CertificationViewSet,basename='Students certifications')
router.register(r'StudentsApplications',StudentApplicationsViewSet,basename='Students applications')
router.register(r'UploadImage',StudentImageViewSet,basename='Student image upload')
router.register(r'UploadCV',CVViewSet,basename='Student CV upload')

router.register(r'TestRecommendations',RecommendationsViewsets,basename='TestOfRecommendations')
urlpatterns=router.urls
