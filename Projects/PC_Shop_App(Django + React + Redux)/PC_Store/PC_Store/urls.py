from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    ###  React Routes  ###
    path('', TemplateView.as_view(template_name='index.html')),
    path('home/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('register/', TemplateView.as_view(template_name='index.html')),
    path('admin-space/', TemplateView.as_view(template_name='index.html')),
    path('admin-space/users/', TemplateView.as_view(template_name='index.html')),
    path('admin-space/components/<string>/',
         TemplateView.as_view(template_name='index.html')),
    path('components/', TemplateView.as_view(template_name='index.html')),
    path('<string>/form/new/', TemplateView.as_view(template_name='index.html')),
    path('<string>/form/<int>/', TemplateView.as_view(template_name='index.html')),
    path('user/form/new/', TemplateView.as_view(template_name='index.html')),
    path('user/form/<int>/', TemplateView.as_view(template_name='index.html')),
    path('components/<string>/', TemplateView.as_view(template_name='index.html')),
    path('components/<string>/<int>/<string2>/',
         TemplateView.as_view(template_name='index.html')),


    ###                ###
    path('api/', include('Shop.urls')),
    path('', include('accounts.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
