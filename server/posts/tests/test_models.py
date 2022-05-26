from django.test import TestCase
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
import django
django.setup()
from posts.models import Posts
# Create your tests here.

class PostModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Posts.objects.create(
            name = 'Ben',
            image = 'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/',
            description = 'I am Ben',
            age = '21',
            q1 = "Cat",
            q2 = "Small",
            q3 = "Couch Potato",
            q4 = "Yes - Young Children",
            q5 = "Yes - A Cat",
            q6 = "Yes",
            q7 = "None - wfh",
            q8 = "Nope",
            username =  "ikenna98"
        )

 

    def test_name_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')

    def test_name_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('name').max_length
        self.assertEqual(max_length, 50)
    
