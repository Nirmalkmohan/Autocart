
from .models import  User
from .serializers import  UserLoginSerializer, UserSerializer
from rest_framework import viewsets
from django.contrib.auth import authenticate, login,logout

from django.http import JsonResponse
import json
from django.views import View




# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()



class UserLoginView(View):
    serializer_class = UserLoginSerializer
    def post(self, request):
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        print(username,password)
        if user is not None:
            login(request, user)
            return JsonResponse({'user_id': user.id,'detail': 'Authentication successful'})
        else:
            return JsonResponse({'detail': 'Invalid credentials'}, status=400)


def user_logout(request):
    logout(request)
    return JsonResponse({'detail': 'Logged out successfully'})
