from django.contrib import admin
from .models import CPU, GPU, RAM, ORDER, Profile

# Register your models here.
admin.site.register(CPU)
admin.site.register(GPU)
admin.site.register(RAM)
admin.site.register(ORDER)
admin.site.register(Profile)
