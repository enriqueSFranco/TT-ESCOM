from email.mime import base
from rest_framework.routers import DefaultRouter
from apps.students.api.views.student_viewsets import StudentViewSet
from apps.students.api.views.skill_viewset import SkillViewSet

router = DefaultRouter()

router.register(r'students', StudentViewSet, basename='students')
router.register(r'student/<int:pk>', StudentViewSet, basename='detail student')
router.register(r'skills', SkillViewSet, basename='skills students')

urlpatterns=router.urls