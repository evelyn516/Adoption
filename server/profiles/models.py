from configparser import MAX_INTERPOLATION_DEPTH
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default='None')
    number = models.CharField(max_length=255, default='None')
    address = models.CharField(max_length=255, default='None')
    email = models.CharField(max_length=255, default='None')
    username = models.CharField(max_length=255, default= 'None')

    def __str__(self):
        return self.username