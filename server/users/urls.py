from django.urls import path

from .views import UserRegistrationView, LoginView, UserView

urlpatterns = [
    path('register/', UserRegistrationView.as_view()),
    path('login/', LoginView.as_view()), 
    path('auth/', UserView.as_view()),
]