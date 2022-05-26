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

    def test_name_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')

    def test_name_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('name').max_length
        self.assertEqual(max_length, 255)

    def test_number_label(self):
        profile = UserProfile.objects.get(id=1)
        field_label = profile._meta.get_field('number').verbose_name
        self.assertEqual(field_label, 'number')

    def test_name_max_length(self):
        profile = UserProfile.objects.get(id=1)
        max_length = profile._meta.get_field('name').max_length
        self.assertEqual(max_length, 255)