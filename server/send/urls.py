from django.urls import path, include

from .views import SendMail

urlpatterns = [
    path('', SendMail.as_view())
]
