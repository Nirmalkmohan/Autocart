 
from rest_framework import serializers
from users.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= '__all__'
        



class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password','user_id')


