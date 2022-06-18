from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.students.api.views.link_viewset import LinkViewSet
from apps.students.api.views.academichistory_viewset import HistorialViewSet
from apps.students.api.views.employmenthistory_viewset import EmploymentViewSet
from apps.students.api.views.studentlenguages_viewset import LenguagesViewSet
from apps.students.api.views.projects_viewset import ProjectsViewSet
from apps.vacantes.api.views.application_viewset import StudentApplicationsViewSet
from apps.students.api.views.certifcation_viewset import CertificationViewSet

router = DefaultRouter()
router.register(r'Students', StudentViewSet, basename='Students')
router.register(r'Student/<int:pk>', StudentViewSet, basename='Student details')
router.register(r'Skills', SkillViewSet, basename='Students skills')
router.register(r'Skills/<int:pk>', SkillViewSet, basename='Student skills details')
router.register(r'Links', LinkViewSet, basename='Students links')
router.register(r'Links/<int:pk>', LinkViewSet, basename='Student links')
router.register(r'AcademicHistorial',HistorialViewSet,basename='Students academic historial')
router.register(r'AcademicHistorial/<int:pk>',HistorialViewSet,basename='Student academic historial details')
router.register(r'EmploymentHistorial',EmploymentViewSet,basename='Students employment historial')
router.register(r'EmploymentHistorial/<int:pk>',EmploymentViewSet,basename='Student employment historial')
router.register(r'StudentsLenguages',LenguagesViewSet,basename='Students lenguages')
router.register(r'StudentLenguages/<int:pk>',LenguagesViewSet,basename='Student lenguages details')
router.register(r'StudentsProjects',ProjectsViewSet,basename='Students personal projects')
router.register(r'StudentsProject/<int:pk>',ProjectsViewSet,basename='Student personal projects')
router.register(r'StudentsCertifications',CertificationViewSet,basename='Students certifications')
router.register(r'StudentsCertifications/<int:pk>',CertificationViewSet,basename='Student certifications')
router.register(r'StudentsApplications',StudentApplicationsViewSet,basename='Students applications')
router.register(r'StudentsApplications/<int:pk>',StudentApplicationsViewSet,basename='Student applications')

urlpatterns=router.urls
