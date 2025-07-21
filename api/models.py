from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    sizes = models.CharField(max_length=100, blank=True)
    colors = models.CharField(max_length=100, blank=True)
    personalization = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name
