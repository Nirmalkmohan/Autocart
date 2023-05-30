from .serializers import SellerSerializer, SellercategorySerializer
from rest_framework import viewsets

from django.shortcuts import render,redirect
from .models import *
from .forms import *

from django.http import FileResponse
from django.conf import settings
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.
def category_create(request):
  if request.method =='GET':
    context={}
    context['form']=CategoryForm()
    return render(request,'seller/categoryCreate.html',context)
  elif request.method=='POST':
    #  product=Add_productForm(request.POST,request.FILES)
     category=CategoryForm(request.POST)
 
     
     if category.is_valid():
      # obj1=product.save(commit=False)
      obj=category.save()
     
      obj.save()
      return redirect('category_details')
     else :
      context={}
      # context['form1']=product
      context['form']=category
      return render (request,'seller/categoryCreate.html',context)
     

def category_details(request):
   context = {'products': Category.objects.all()}
   return render(request,'seller/categoryDetails.html',context)
from django.shortcuts import render

'''for implementing api'''
class SellerViewSet(viewsets.ModelViewSet):
    serializer_class = SellerSerializer
    queryset = sellProduct.objects.all()
  


def get_image(request, image):
    image_path = os.path.join(settings.MEDIA_ROOT, image)
    return FileResponse(open(image_path, 'rb'), content_type='image/png')


class CategoryFilterView(APIView):
     def get(self, request):
        category = request.GET.get('category')
        products = sellProduct.objects.filter(Q(Category_id=category))
        serializer = SellerSerializer(products, many=True)
        return Response(serializer.data)


class SellercategoryViewSet(viewsets.ModelViewSet):
    serializer_class = SellercategorySerializer
    queryset = Category.objects.all()


class MyAdsAPIView(APIView):

    def get(self, request):
        user_id = request.GET.get('user')
        messages = sellProduct.objects.filter(Q(user_id=user_id))
        serializer = SellerSerializer(messages, many=True)
        return Response(serializer.data)
