from django.test import TestCase
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
import django
django.setup()
from profiles.models import UserProfile
# Create your tests here.

class UserProfileModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        UserProfile.objects.create(
            name = 'Ben',
            number = '07393326640',
            address = 'Maryland',
            email = 'abc@gmail.com',
            username = 'Ben20'
        )
    
    # Name Entry

    def test_name_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')


    def test_name_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('name').max_length
        self.assertEqual(max_length, 255)
    
    # Number Entry

    def test_number_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('number').verbose_name
        self.assertEqual(field_label, 'number')

    def test_number_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('number').max_length
        self.assertEqual(max_length, 255)

    # Address Entry

    def test_address_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('address').verbose_name
        self.assertEqual(field_label, 'address')

    def test_address_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('address').max_length
        self.assertEqual(max_length, 255)

    # Email Entry

    def test_email_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('email').verbose_name
        self.assertEqual(field_label, 'email')

    def test_email_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('email').max_length
        self.assertEqual(max_length, 255)

    # Username Entry

    def test_username_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('username').verbose_name
        self.assertEqual(field_label, 'username')

    def test_username_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('username').max_length
        self.assertEqual(max_length, 255)

    # Self

    def test_object_name_is_last_name_comma_first_name(self):
        profile = UserProfile.objects.get(id=1)
        expected_object_name = profile.username
        self.assertEqual(str(profile), expected_object_name)
