from rest_framework import serializers
from .models import *
class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = sellProduct
        fields= 'id','sellngItem','description','price','image','Category','user'

class SellercategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= '__all__'
        
        