from django.db import models
from django.contrib.auth.admin import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    summary = models.TextField(max_length=10000)
    about_author = models.TextField(max_length=10000)
    rate = models.FloatField(default=0.0)

    def __str__(self):
        return self.name


class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    comment = models.TextField(max_length=1000)

    def __str__(self):
        return self.user.username + self.book.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    is_shiped = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username + self.book.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                primary_key=True)
    age = models.IntegerField(default=0)
    country = models.CharField(max_length=100,default='N/A')
    ordered_books = models.TextField(max_length=1000,default='N/A')

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
