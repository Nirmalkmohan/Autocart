from django.urls import path, include
from rest_framework.routers import DefaultRouter
from seller.views import (
    SellerViewSet,
    SellercategoryViewSet,
    CategoryFilterView,
    category_create,
    category_details,
    MyAdsAPIView,
)

router = DefaultRouter()
router.register(r'sell', SellerViewSet, basename='sell')
router.register(r'sellcategory', SellercategoryViewSet, basename='category')


urlpatterns = [
    path('addcategory/', category_create, name='category_create'),
    path('category/', category_details, name='category_details'),
    path('sell/ads/', MyAdsAPIView.as_view(), name='ads-list'),
    path('filter/', CategoryFilterView.as_view(), name='filter-category'),
    path('', include(router.urls)),
]
