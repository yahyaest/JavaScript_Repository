from Shop.models import CPU, GPU, RAM, ORDER,Profile
from django.contrib.auth.admin import User
from rest_framework import viewsets, permissions
from .serializer import UserSerializer, CPUSerializer, GPUSerializer, RAMSerializer, ORDERSerializer, ProfileSerializer

# User Viewset


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer


# CPU Viewset
class CPUViewSet(viewsets.ModelViewSet):
    queryset = CPU.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = CPUSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        frequency = request.data['frequency']
        cache = request.data['cache']
        cores = request.data['cores']
        image = request.data['image']
        CPU.objects.create(name=name,
                           price=price,
                           frequency=frequency,
                           cache=cache,
                           cores=cores,
                           image=image)


# GPU Viewset
class GPUViewSet(viewsets.ModelViewSet):
    queryset = GPU.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = GPUSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        frequency = request.data['frequency']
        memory = request.data['memory']
        image = request.data['image']
        GPU.objects.create(name=name,
                           price=price,
                           frequency=frequency,
                           memory=memory,
                           image=image)


# RAM Viewset
class RAMViewSet(viewsets.ModelViewSet):
    queryset = RAM.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = RAMSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        capacity = request.data['capacity']
        frequency = request.data['frequency']
        image = request.data['image']
        RAM.objects.create(name=name,
                           price=price,
                           capacity=capacity,
                           frequency=frequency,
                           image=image)


# ORDER Viewset
class ORDERViewSet(viewsets.ModelViewSet):
    queryset = ORDER.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = ORDERSerializer


# Profile Viewset
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer
