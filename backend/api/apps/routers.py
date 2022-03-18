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
from apps.students.api.views.employmenthistory_viewset import EmploymentViewSet
from apps.students.api.views.studentlenguages_viewset import LenguagesViewSet
from apps.vacantes.api.views.announcement_viewset import AnnouncementViewSet
router = DefaultRouter()

router.register(r'Students', StudentViewSet, basename='students')
router.register(r'Student/<int:pk>', StudentViewSet, basename='detail student')
router.register(r'Skills', SkillViewSet, basename='students skills')
router.register(r'Skills/<int:pk>', SkillViewSet, basename='student skills')
router.register(r'Vacants', VacantViewSet, basename='vacants')
router.register(r'Vacant/<int:pk>', VacantViewSet, basename='detail vacant')
router.register(r'Residence', StudentResidenceViewSet, basename='students residence')
router.register(r'Residence/<int:pk>', StudentResidenceViewSet, basename='student residence')
router.register(r'Links', LinkViewSet, basename='students links')
router.register(r'Links/<int:pk>', LinkViewSet, basename='student links')
router.register(r'AcademicHistorial',HistorialViewSet,basename='students academic historial')
router.register(r'AcademicHistorial/<int:pk>',HistorialViewSet,basename='student academic historial')
router.register(r'EmploymentHistorial',EmploymentViewSet,basename='students employment historial')
router.register(r'EmploymentHistorial/<int:pk>',EmploymentViewSet,basename='student employment historial')
router.register(r'StudentsLenguages',LenguagesViewSet,basename='students lenguages')
router.register(r'StudentLenguages/<int:pk>',LenguagesViewSet,basename='student lenguages')
router.register(r'Announcements',AnnouncementViewSet,basename='announcements')
router.register(r'Announcement/<int:pk>',AnnouncementViewSet,basename='announcement')
urlpatterns=router.urls