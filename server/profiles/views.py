from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserProfileSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from django.http import  Http404
# from ..users import serializers
from django.contrib.auth.models import User
from rest_framework import permissions


# Create your views here.



class UserProfileList(APIView):
    permission_classes = (permissions.AllowAny, )

    def get_object(self, username):
        try:
            return UserProfile.objects.get(username=username)
        except UserProfile.DoesNotExist:
            raise Http404

    def get(self, request, username):
        found_user = self.get_object(username)
        serializer = UserProfileSerializer(found_user)
        return Response(serializer.data)


    def put(self, request, username, format= None):
        data = request.data
        data['username'] = username

        try:
            found_user = UserProfile.objects.filter(username = username).first()
            serializer = UserProfileSerializer(found_user, data = data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        except:
            serializer = UserProfileSerializer(data = data)
            return Response(serializer.data)