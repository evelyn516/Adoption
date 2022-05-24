from django.http import HttpResponse
# from django.shortcuts import render, redirect
# from .forms import *

# # Create your views here.
# def hotel_image_view(request):

# 	if request.method == 'POST':
# 		form = HotelForm(request.POST, request.FILES)

# 		if form.is_valid():
# 			form.save()
# 			return redirect('success')
# 	else:
# 		form = HotelForm()
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
        print('called')
        serializer = PostsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
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
