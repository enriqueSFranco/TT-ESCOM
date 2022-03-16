from email.mime import base
from operator import imod
from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.vacantes.api.views.vacant_viewset import  VacantViewSet
from apps.students.api.views.residence_viewsets import StudentResidenceViewSet
from apps.students.api.views.link_viewset import LinkViewSet
router = DefaultRouter()

router.register(r'students', StudentViewSet, basename='students')
router.register(r'student/<int:pk>', StudentViewSet, basename='detail student')
router.register(r'skills', SkillViewSet, basename='skills students')
router.register(r'vacants', VacantViewSet, basename='vacants')
router.register(r'vacant/<int:pk>', VacantViewSet, basename='detail vacant')
router.register(r'residence/', StudentResidenceViewSet, basename='student residence')
router.register(r'links/', LinkViewSet, basename='student links')
urlpatterns=router.urls