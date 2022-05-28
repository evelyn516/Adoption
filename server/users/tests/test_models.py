from django.test import TestCase
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
import django
django.setup()

from django.contrib.auth.models import User
# Create your tests here.

class UserProfileModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.create(
            username = 'username',
            password = 'password',
            first_name='first name',
            last_name='first name',
            email='test@test.test',
        )
    
    # Username Entry

    def test_username_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('username').verbose_name
        self.assertEqual(field_label, 'username')


    def test_username_max_length(self):
        user = User.objects.get(id=1)
        max_length = user._meta.get_field('username').max_length
        self.assertEqual(max_length, 150)
    
    # Password Entry

    def test_password_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('password').verbose_name
        self.assertEqual(field_label, 'password')

    # First Name Entry

    def test_firstname_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('first_name').verbose_name
        self.assertEqual(field_label, 'first name')

    def test_firstname_max_length(self):
        user = User.objects.get(id=1)
        max_length = user._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 150)

    # # Last_name Entry

    def test_lastname_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('last_name').verbose_name
        self.assertEqual(field_label, 'last name')

    def test_lastname_max_length(self):
        user = User.objects.get(id=1)
        max_length = user._meta.get_field('last_name').max_length
        self.assertEqual(max_length, 150)

    # Email Entry

    def test_email_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('email').verbose_name
        self.assertEqual(field_label, 'email address')

  
