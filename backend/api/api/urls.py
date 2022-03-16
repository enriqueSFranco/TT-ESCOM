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
from apps.students.views import Login, Logout, UserToken

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('api/', include('apps.students.api.routers')),
    path('login/', Login.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
    path('refresh-token/', UserToken.as_view(), name='refresh-token')
=======
    path('usuario/', include('apps.users.api.urls')),
    path('iniciar-sesion/', Login.as_view(), name='iniciar-sesion'),
    path('cerrar-sesion/', Logout.as_view(), name='cerrar-sesion'),
    path('refresh-token/', UserToken.as_view(), name='refresh-token'),
    path('api/', include('apps.routers'))
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
]
