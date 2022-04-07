from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.companies.api.views.images_viewsets import CompanyLogoViewSet,CompanyBannerViewSet
from apps.students.api.views.images_viewsets import StudentImageViewSet,CVViewSet

router = DefaultRouter()

router.register(r'CompanyLogo', CompanyLogoViewSet, basename='Logos')
router.register(r'CompanyLogo/<int:pk>', CompanyLogoViewSet, basename='Logo')
router.register(r'CompanyBanner', CompanyBannerViewSet, basename='Banners')
router.register(r'CompanyBanner/<int:pk>', CompanyBannerViewSet, basename='Banner')
router.register(r'StudentPic', StudentImageViewSet, basename='Student profile picture')
router.register(r'StudentPic/<int:pk>', StudentImageViewSet, basename='Student profile picture')
router.register(r'StudentCV', CVViewSet, basename='Students cv')
router.register(r'StudentCV/<int:pk>', CVViewSet, basename='Student cv')

urlpatterns=router.urls
