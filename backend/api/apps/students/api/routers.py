from rest_framework.routers import DefaultRouter
from apps.students.api.api import StudentViewSet

router = DefaultRouter()

router.register('students', StudentViewSet, basename='students')

urlpatterns = router.urls