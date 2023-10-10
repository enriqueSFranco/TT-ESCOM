from django.urls import path
from .views import UserCreate, BlacklistTokenUpdateView,UserViewSet

app_name = 'users'

urlpatterns = [
  path('register/', UserCreate.as_view(), name="register_user"),
  path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),name='blacklist'),  
]
