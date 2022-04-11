from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.students.api.views.login_viewset import Login
from apps.students.api.views.student_viewsets import StudentViewSet
router = DefaultRouter()

router.register(r'student/login', StudentViewSet, basename='Students')

urlpatterns=router.urls