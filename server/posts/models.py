from email.policy import default
from django.db import models

# Create your models here.

# models.py
class Posts(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=255, default='None') #image
    description = models.CharField(max_length=255, default='None')
    age = models.CharField(max_length=255, default='None')
    q1 = models.CharField(max_length=255, default= 'None')
    q2 = models.CharField(max_length=255, default= 'None')
    q3 = models.CharField(max_length=255, default= 'None')
    q4 = models.CharField(max_length=255, default= 'None')
    q5 = models.CharField(max_length=255, default= 'None')
    q6 = models.CharField(max_length=255, default= 'None')
    q7 = models.CharField(max_length=255, default= 'None')
    q8 = models.CharField(max_length=255, default= 'None')
    username = models.CharField(max_length=255, default= 'None')

    def __str__(self):
        return self.username
