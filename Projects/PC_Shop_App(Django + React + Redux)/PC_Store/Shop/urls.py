from rest_framework import routers
from .api import UserViewSet, CPUViewSet, GPUViewSet, RAMViewSet, ORDERViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet, 'user')
router.register('cpu', CPUViewSet, 'cpu')
router.register('gpu', GPUViewSet, 'gpu')
router.register('ram', RAMViewSet, 'ram')
router.register('order', ORDERViewSet, 'order')
router.register('profile', ProfileViewSet, 'profile')


urlpatterns = router.urls
