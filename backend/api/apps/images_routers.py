from cgitb import Hook
from email.mime import base
import imp
from operator import imod
from posixpath import basename
from rest_framework.routers import DefaultRouter
from apps.companies.api.views.images_viewsets import CompanyLogoViewSet,CompanyBannerViewSet

router = DefaultRouter()

router.register(r'CompanyLogo', CompanyLogoViewSet, basename='Logos')
router.register(r'CompanyLogo/<int:pk>', CompanyLogoViewSet, basename='Logo')
router.register(r'CompanyBanner', CompanyBannerViewSet, basename='Banners')
router.register(r'CompanyBanner/<int:pk>', CompanyBannerViewSet, basename='Banner')


urlpatterns=router.urls
