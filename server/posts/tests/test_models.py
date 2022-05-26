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

    def test_image_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('image').verbose_name
        self.assertEqual(field_label, 'image')

    def test_image_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('image').max_length
        self.assertEqual(max_length, 255)
    
    def test_description_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('description').verbose_name
        self.assertEqual(field_label, 'description')

    def test_description_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('description').max_length
        self.assertEqual(max_length, 255)

    def test_age_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('age').verbose_name
        self.assertEqual(field_label, 'age')

    def test_age_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('age').max_length
        self.assertEqual(max_length, 255)

    def test_q1_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q1').verbose_name
        self.assertEqual(field_label, 'q1')

    def test_q1_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q1').max_length
        self.assertEqual(max_length, 255)

    def test_q2_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q2').verbose_name
        self.assertEqual(field_label, 'q2')

    def test_q2_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q2').max_length
        self.assertEqual(max_length, 255)

    def test_q3_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q3').verbose_name
        self.assertEqual(field_label, 'q3')

    def test_q3_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q3').max_length
        self.assertEqual(max_length, 255)

    def test_q4_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q4').verbose_name
        self.assertEqual(field_label, 'q4')

    def test_q4_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q4').max_length
        self.assertEqual(max_length, 255)

    def test_q5_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q5').verbose_name
        self.assertEqual(field_label, 'q5')

    def test_q5_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q5').max_length
        self.assertEqual(max_length, 255)

    def test_q6_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q6').verbose_name
        self.assertEqual(field_label, 'q6')

    def test_q6_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q6').max_length
        self.assertEqual(max_length, 255)
        
    def test_q7_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q7').verbose_name
        self.assertEqual(field_label, 'q7')

    def test_q7_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q7').max_length
        self.assertEqual(max_length, 255)

    def test_q8_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('q8').verbose_name
        self.assertEqual(field_label, 'q8')

    def test_q8_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('q8').max_length
        self.assertEqual(max_length, 255)

    def test_username_label(self):
        animal = Posts.objects.get(id=1)
        field_label = animal._meta.get_field('username').verbose_name
        self.assertEqual(field_label, 'username')

    def test_username_max_length(self):
        animal = Posts.objects.get(id=1)
        max_length = Posts._meta.get_field('username').max_length
        self.assertEqual(max_length, 255)




