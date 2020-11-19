from django.db import models
from django.contrib.auth.admin import User

# Create your models here.

class Task(models.Model):
 title = models.CharField(max_length=200)
 author = models.CharField(max_length=50)
 owner = models.ForeignKey(User, related_name="tasks", on_delete=models.CASCADE, null=True)
 created_at = models.DateTimeField(auto_now_add=True)

 def __str__(self):
  return self.title