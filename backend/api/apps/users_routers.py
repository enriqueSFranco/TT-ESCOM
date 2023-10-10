from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.users.views import UserViewSet

router = DefaultRouter()

router.register(r'Users', UserViewSet, basename='Registered users')

urlpatterns=router.urls
