from django.urls import path
from users.views import UserViewSet
from rest_framework.routers import DefaultRouter
from users import views
from django.urls import path
from .views import UserLoginView,user_logout

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='users')

urlpatterns = [
    path('login/', UserLoginView.as_view()),
    path('logout/', user_logout, name='user_logout'),
]+ router.urls
