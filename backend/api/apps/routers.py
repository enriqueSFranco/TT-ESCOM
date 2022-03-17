from cgitb import Hook
from email.mime import base
from operator import imod
from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.students.api.views.residence_viewsets import StudentResidenceViewSet
from apps.students.api.views.link_viewset import LinkViewSet
from apps.students.api.views.academichistory_viewset import HistorialViewSet
router = DefaultRouter()

router.register(r'Students', StudentViewSet, basename='students')
router.register(r'Student/<int:pk>', StudentViewSet, basename='detail student')
router.register(r'Skills', SkillViewSet, basename='skills students')
router.register(r'Vacants', VacantViewSet, basename='vacants')
router.register(r'Vacant/<int:pk>', VacantViewSet, basename='detail vacant')
router.register(r'Residence', StudentResidenceViewSet, basename='students residence')
#router.register(r'Residence/<int:pk>', StudentResidenceViewSet, basename='student residence')
router.register(r'Links', LinkViewSet, basename='students links')
router.register(r'Link/<int:pk>', LinkViewSet, basename='student links')
router.register(r'AcademicHistorial',HistorialViewSet,basename='students academic historial')
urlpatterns=router.urls