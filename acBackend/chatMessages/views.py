from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .serializers import ChatMessageSerializer, ChatThreadSerializer
from .models import ChatMessage
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication


class MessageView(APIView):
    

    def get(self, request, sender_id, receiver_id, product_id):
        messages = ChatMessage.objects.filter(
            Q(sender_id=sender_id, receiver_id=receiver_id, product_id=product_id) |
            Q(sender_id=receiver_id, receiver_id=sender_id, product_id=product_id)
        ).order_by('timestamp')
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request):
        serializer = ChatMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from .models import ChatMessage
from .serializers import ChatMessageSerializer
class InboxView(APIView):
    def get(self, request, user_id):
        # Retrieve all chat messages sent or received by the user
        chat_messages = ChatMessage.objects.filter(Q(sender_id=user_id) | Q(receiver_id=user_id)).order_by('-timestamp')

        # Group the chat messages by product
        product_chat_messages = {}
        for chat_message in chat_messages:
            product_id = chat_message.product_id
            if product_id not in product_chat_messages:
                product_chat_messages[product_id] = [chat_message]
            else:
                product_chat_messages[product_id].append(chat_message)

        # For each product group, find the latest message and create a chat thread with the other user and the product
        chat_threads = []
        for product_id, chat_messages in product_chat_messages.items():
            latest_chat_message = chat_messages[0]
            other_user_id = latest_chat_message.sender_id if latest_chat_message.receiver_id == user_id else latest_chat_message.receiver_id
            chat_thread = ChatMessage(sender_id=user_id, receiver_id=other_user_id, product_id=product_id, text=latest_chat_message.text, timestamp=latest_chat_message.timestamp)
            chat_threads.append(chat_thread)

        serializer = ChatThreadSerializer(chat_threads, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


# class InboxView(APIView):
#     def get(self, request):
#         user_id = request.query_params.get('userId')
#         chats = ChatMessage.objects.filter(Q(sender_id=user_id) | Q(receiver_id=user_id)).order_by('-timestamp')
#         chat_users = {}
#         for chat in chats:
#             if chat.sender_id != user_id:
#                 other_user_id = chat.sender_id
#             else:
#                 other_user_id = chat.receiver_id
#             if other_user_id not in chat_users:
#                 chat_users[other_user_id] = chat
#             else:
#                 if chat.timestamp > chat_users[other_user_id].timestamp:
#                     chat_users[other_user_id] = chat

#         chat_threads = [chat_users[user_id] for user_id in chat_users]
#         serializer = ChatThreadSerializer(chat_threads, many=True, context={'request': request})
#         return Response(serializer.data, status=status.HTTP_200_OK)