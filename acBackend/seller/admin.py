from django.contrib import admin
from .models import sellProduct,Category
# Register your models here.
@admin.register(sellProduct)
class MovieAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class MovieAdmin(admin.ModelAdmin):
    pass