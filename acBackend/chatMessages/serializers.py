from rest_framework import serializers
from .models import ChatMessage

class ChatMessageSerializer(serializers.ModelSerializer):
    # sender = serializers.ReadOnlyField(source='sender.username')
    # receiver = serializers.ReadOnlyField(source='receiver.username')

    class Meta:
        model = ChatMessage
        fields = ['id', 'sender', 'receiver', 'product', 'text', 'timestamp']



class ChatThreadSerializer(serializers.ModelSerializer):
    user_id = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    receiver_username = serializers.SerializerMethodField()
    last_message = serializers.CharField(source='text')
    timestamp = serializers.DateTimeField()
    product_id = serializers.IntegerField()
    product_name = serializers.SerializerMethodField()

    def get_user_id(self, obj):
        request = self.context.get('request')
        user_id = request.query_params.get('userId')
        return obj.sender_id if obj.sender_id != user_id else obj.receiver_id

    def get_username(self, obj):
        request = self.context.get('request')
        user_id = request.query_params.get('userId')
        return obj.sender.username if obj.sender_id != user_id else obj.receiver.username

    def get_receiver_username(self, obj):
        request = self.context.get('request')
        user_id = request.query_params.get('userId')
        return obj.receiver_id if obj.sender_id != user_id else  obj.sender_id
    
    def get_product_name(self, obj):
        product = obj.product
        return product.sellngItem if product else None

    class Meta:
        model = ChatMessage
        fields = ['user_id', 'username', 'receiver_username', 'last_message', 'timestamp', 'product_id', 'product_name']




