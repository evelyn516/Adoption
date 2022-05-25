from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import *

# # Create your views here.
# def post_view(request):

# 	if request.method == 'POST':
# 		form = PostForm(request.POST, request.FILES)
# 		if form.is_valid():
# 			form.save()
# 			return redirect('success')
# 	else:
# 		form = PostForm()
#     # Response(serializer.data, status=status.HTTP_201_CREATED) (for the return statement)
# 	return render(request, 'home.html', {'form' : form})


# def success(request):
# 	return HttpResponse('successfully uploaded')

# # Python program to view
# # for displaying images

# def display_hotel_images(request):

#     if request.method == 'GET':
#         # getting all the objects of hotel.
#         Hotels = Hotel.objects.all()
#         print(Hotels)
#         return render(request, 'display_hotel_images.html',
# 					{'hotel_images' : Hotels})

from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import PostsSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Posts
from django.http import  Http404
# from ..users import serializers
from django.contrib.auth.models import User
from rest_framework import permissions


# Create your views here.


class PostList(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format = None):
        print(request.data)
        serializer = PostsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED) ##
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
class PostInd(APIView):
    permission_classes = (permissions.AllowAny, )
    def get_object(self, username):
        try:
            return Posts.objects.filter(username=username)
        except Posts.DoesNotExist:
            raise Http404
    def get(self, request, username, format=None):
        posts = self.get_object(username)
        serializer = PostsSerializer(posts, many=True)
        return Response(serializer.data)

class DogList(APIView):
    permission_classes = (permissions.AllowAny, )
    def get_object(self, animal):
        try:
            return Posts.objects.filter(q1=animal)
        except Posts.DoesNotExist:
            raise Http404

    def get(self, request, format= None):  
        print(self, request)
        dogs = self.get_object('Dog')
        serializer = PostsSerializer(dogs, many=True)
        return Response(serializer.data)

class CatList(APIView):
    permission_classes = (permissions.AllowAny, )
    def get_object(self, animal):
        try:
            print('hello')
            return Posts.objects.filter(q1=animal)
        except Posts.DoesNotExist:
            raise Http404

    def get(self, request, format= None):  
        print(self, request)
        cats = self.get_object('Cat')
        print(cats)
        serializer = PostsSerializer(cats, many=True)
        return Response(serializer.data)

class MatchList(APIView):
    permission_classes = (permissions.AllowAny, )

    def get_object(self, animal):
        try:
            return Posts.objects.filter(q1=animal)
        except Posts.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        # print(request.data['quizData'])
        # print('called')
        # animals_type = self.get_object(request.data['quizData'][0])
        # serializer = PostsSerializer(animals_type, many=True)
        # score = 0 
        # data = []
        # for x in range(0, len(request.data['quizData']), 1):
        #     for z in range(0, len(serializer.data), 1):
        #         for y in serializer.data[z]:
        #             if request.data['quizData'][x] == serializer.data[z][y]:
        #                 score+=1
        #             # serializer.data[z]['score'] = score
        #     data.append(serializer.data[z])

        # print(len(data))
        # print(score)
        
#  range(0, len(serializer.data[z]), 1)
        animal = request.data['quizData'][0]
        db = 0
        if animal == 'I don\'t mind!':
            db = Posts.objects.all() #check this
        else:
            db = self.get_object(animal)

        db_serialized = PostsSerializer(db, many=True)
        quizData = (request.data['quizData'])
        db = db_serialized.data

        score = 0
        match_list = []
        level_1 = []
        level_2 = []
        level_3 = []

        for pet in db:
            score = 0
            for req, values in pet.items(): # mqy hqve to check whether this returns key or vqlue
                for q in quizData:
                    if values == q:
                        score += 1
            if score > 0: 
                pet['score'] = score
                match_list.append(pet)
            # match_list[pet['id']] = score

            # switch/case stqtement if score >8 level_1>qppend() etc
            def myFunc(e):
                return e['score']
            match_list.sort(key=myFunc, reverse=True)

        return Response(match_list)
