from django.urls import path

# from .views import UserRegistrationView, LoginView, UserView
from .views import UserProfileList

urlpatterns = [
   path('<str:username>/', UserProfileList.as_view(), name='usernameProfile')
]