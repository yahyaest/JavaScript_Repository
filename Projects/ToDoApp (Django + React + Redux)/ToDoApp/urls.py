from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    ###  React Routes  ###
    path('home/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('register/', TemplateView.as_view(template_name = 'index.html')),
    path('to_do/', TemplateView.as_view(template_name='index.html')),
    path('task/new/', TemplateView.as_view(template_name='index.html')),
    path('task/<int>/', TemplateView.as_view(template_name='index.html')),


    ###                ###
    path('api/', include('api.urls')),
    path('', include('accounts.urls')),
]
