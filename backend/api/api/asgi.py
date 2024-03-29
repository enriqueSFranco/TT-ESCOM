"""
ASGI config for api project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os
import django
from channels.http import AsgiHandler


from django.urls import path
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import api.urls

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')

application = get_asgi_application()


application = ProtocolTypeRouter({
    'http' : get_asgi_application,
    'websocket' : AuthMiddlewareStack(
        URLRouter(
            api.urls.websocket_urlpatterns
        )
    )
})
