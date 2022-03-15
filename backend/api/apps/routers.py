from email.mime import base
from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.studentskill_viewset import SkillViewSet
from apps.vacantes.api.views.vacant_viewset import VacantViewSet
router = DefaultRouter()

router.register(r'students', StudentViewSet, basename='students')
router.register(r'student/<int:pk>', StudentViewSet, basename='detail student')
router.register(r'skills', SkillViewSet, basename='skills students')
router.register(r'vacants', VacantViewSet, basename='vacants')
router.register(r'vacant/<int:pk>', VacantViewSet, basename='detail vacant')
#srouter.register(r'vacant/<int:pk>', VacantViewSet, basename='detail vacant')
urlpatterns=router.urls