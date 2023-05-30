from django.contrib.auth.backends import BaseBackend
# from django.contrib.auth import get_user_model
from users.models import User

class CustomUserAuthBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        # User = get_user_model()
        try:
            user = User.objects.get(username=username)
            print("Custom authentication backend used.")
        except User.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        else:
            return None

    def get_user(self, user_id):
        # User = get_user_model()
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
