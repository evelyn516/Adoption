from django.test import TestCase
from django.urls import reverse
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
import django
django.setup()
from profiles.models import UserProfile
from profiles.serializers import UserProfileSerializer
# Create your tests here.


class UserProfileViewTest(TestCase):
    def setUpTestData():
        # number_of_users = 10
        # for user_id in range(number_of_users):
        #     UserProfile.objects.create(
        #     name = f'Ben{user_id}',
        #     number = f'07393326640{user_id}',
        #     address = f'Maryland{user_id}',
        #     email = f'abc@gmail.com{user_id}',
        #     username = f'Ben20{user_id}'
        #     )
        UserProfile.objects.create(
            name = 'Ben',
            number = '07393326640',
            address = 'Maryland',
            email = 'abc@gmail.com',
            username = 'Ben20'
        )


    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('usernameProfile', kwargs={'username': 'Ben20'}))
        profile = UserProfile.objects.get(id = 1 )
        serializer = UserProfileSerializer(profile)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('usernameProfile', kwargs={'username': 'Ben2'}))
        profile = UserProfile.objects.get(id = 1 )
        serializer = UserProfileSerializer(profile)
        self.assertEqual(response.data, {'detail': 'Not found.'})
        self.assertEqual(response.status_code, 404)
    
    def test_view_url_accessible_by_name(self):
        mock = {
            "name": 'Be',
            "number": '0739332664',
            "address": 'Marylan',
            "email": 'ab@gmail.com',
            "username": 'Ben2'
        }
        response = self.client.get(reverse('usernameProfile', kwargs={'username': 'Ben20'}))
        profile = UserProfile.objects.get(id = 1 )
        serializer = UserProfileSerializer(profile, data = mock)
        serializer.is_valid()
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)