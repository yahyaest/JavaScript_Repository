from django.db import models
from django.contrib.auth.admin import User
#from djangotoolbox.fields import ListField
from tablefield.fields import TableField
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class CPU(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    frequency = models.FloatField(default=0)
    cache = models.IntegerField(default=0)
    cores = models.IntegerField(default=0)
    image = models.ImageField(null=True, blank=True)
    hardware_type = models.CharField(max_length=100, default="cpu")

    def __str__(self):
        return self.name


class GPU(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    memory = models.IntegerField(default=0)
    frequency = models.FloatField(default=0)
    image = models.ImageField(null=True, blank=True)
    hardware_type = models.CharField(max_length=100, default="gpu")

    def __str__(self):
        return self.name


class RAM(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    frequency = models.FloatField(default=0)
    image = models.ImageField(null=True, blank=True)
    hardware_type = models.CharField(max_length=100, default="ram")

    def __str__(self):
        return self.name


class ORDER(models.Model):
    client = models.CharField(max_length=100)
    content = models.JSONField(encoder=None, decoder=None)
    owner = models.ForeignKey(
        User, related_name="order", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.client


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                primary_key=True)
    #favourites = TableField(verbose_name='Table')
    data = models.JSONField(encoder=None, decoder=None, default={
                            "favourites": [], "chart": []})

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
