from django.db import models

from users.models import User

# Create your models here.
class Category(models.Model):
    
    category_name=models.CharField(
        verbose_name="Product Category",
        null=False,
        max_length=300,
    )
    def __str__(self) -> str:
        return self.category_name
    
class sellProduct(models.Model):
    sellngItem=models.CharField(
        verbose_name='Product name',
        max_length=50,
    )
    price=models.DecimalField(
        verbose_name="Price",
        max_digits=100,
        decimal_places=2
    )
    description=models.TextField(
        verbose_name="Description",
        max_length=1000,
    )
    stock=models.IntegerField(
        verbose_name="Stock",
        default=0
    )
    
    image=models.FileField(
        verbose_name='Product image',
        upload_to='products/',
    )

    status=models.BooleanField(
        verbose_name="Status",
        default=True
    )
    created_at=models.DateTimeField(auto_now_add=True)

    
    updated_at=models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        User, # The user model
        on_delete=models.CASCADE, # When the user is deleted, also delete the products
        related_name='products', # The name to use for the reverse relation from User to SellProduct
        null=True
       
    )
    Category=models.ForeignKey(
        verbose_name="Category",
        to=Category,
        on_delete=models.RESTRICT,
        
    )
