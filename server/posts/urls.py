from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
	# path('upload', post_view, name = 'image_upload'),
	# path('success', success, name = 'success'),
    # path('images', display_hotel_images, name = 'hotel_images'),
    path('', PostList.as_view()),
    path('<str:username>/', PostInd.as_view()), 
    path('animal/cats/', CatList.as_view()),
    path('animal/dogs/', DogList.as_view()), 
    path('quiz/match/', MatchList.as_view())
]

# if settings.DEBUG:
# 		urlpatterns += static(settings.MEDIA_URL,
# 							document_root=settings.MEDIA_ROOT)
