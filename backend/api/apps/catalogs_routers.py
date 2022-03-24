from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.students.api.views.catalogs_viewset import AcademicLevelViewSet,AcademicStateViewSet,PlataformViewSet,SkillsViewSet,LenguageViewSet

router = DefaultRouter()

router.register(r'catalogs/CatalogueAcademicLevel',AcademicLevelViewSet,basename='Academic level catalog')
router.register(r'catalogs/CatalogueAcademicState',AcademicStateViewSet,basename='Academic state catalog')
router.register(r'catalogs/CataloguePlataform',PlataformViewSet,basename='Plataforms catalog')
router.register(r'catalogs/CatalogueSkills',SkillsViewSet,basename='Skills calog')
router.register(r'catalogs/CatalogueLenguage',LenguageViewSet,basename='Lenguages calog')



urlpatterns=router.urls
