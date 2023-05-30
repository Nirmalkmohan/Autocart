from django.urls import path
from .views import MessageView,InboxView


urlpatterns = [
    path('messages/<int:sender_id>/<int:receiver_id>/<int:product_id>/', MessageView.as_view(), name='message-list'),
    path('messages/', MessageView.as_view(), name='chat-messages'),
    path('inbox/<int:user_id>/', InboxView.as_view()),

]

