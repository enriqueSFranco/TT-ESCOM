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
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from apps.students.views import Login, Logout, UserToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.routers')),
    path('api/user/', include('apps.users.urls')),
    path('api/catalogues/',include('apps.catalogs_routers')),
    # path('iniciar-sesion/', Login.as_view(), name='iniciar-sesion'),
    # path('cerrar-sesion/', Logout.as_view(), name='cerrar-sesion'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh-token/', TokenRefreshView.as_view(), name='refresh-token'),
    path('images/',include('apps.images_routers'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
