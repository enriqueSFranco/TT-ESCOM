from email.mime import base
from rest_framework.routers import DefaultRouter
from apps.vacantes.api.views.vacant_viewset import VacantViewSet
router = DefaultRouter()

router.register(r'vacants', VacantViewSet, basename='vacants')
router.register(r'vacant/<int:pk>', VacantViewSet, basename='detail vacant')

urlpatterns=router.urls