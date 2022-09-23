"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from apps.vacantes.api.views.vacant_viewset import FilterVacant
from apps.students.api.views.login_viewset import Login
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from apps.users.views import MyTokenObtainPairView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Backend: Bolsa de Trabajo ESCOM",
      default_version='v0.5',
      description="Documentación de los endpoints utilizados para la comunicación entre el frontend y el backend del proyecto Bolsa de Trabajo ESCOM",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="jcruzh1301@alumno.ipn.mx"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),    
    path('student/', include('apps.student_routers')),
    path('company/', include('apps.companies_routers')),
    path('manager/', include('apps.manager_routers')),
    path('vacant/', include('apps.vacants_routers')),
    path('users/', include('apps.users_routers')),
    path('api/catalogues/',include('apps.catalogs_routers')),#-----------Cambiar en front las peticiones
    path('catalog/',include('apps.catalogs_routers')),    
    #path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),#-----------Cambiar en front las peticiones
    path('sesion/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('sesion/refresh-token/', TokenRefreshView.as_view(), name='refresh-token'),
    #path('api/token/refresh-token/', TokenRefreshView.as_view(), name='refresh-token'),#-----------Cambiar en front las peticiones    
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),    
    re_path('^vacant/search/(?P<search>.+)/$', FilterVacant.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
