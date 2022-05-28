from rest_framework.views import APIView
from rest_framework.response import Response

# from ..users import serializers

from django.core.mail import send_mail

# Create your views here.
class SendMail(APIView):
    def post(self, request):
        print(request.data)
        send_mail(f"{request.data['animalName']} => id: {request.data['animalId']}",
        request.data['emailBody'], 
        'noreply@adoption.com', 
        [request.data['to']], fail_silently=False)
        return Response({'message':'email sent'}) 
