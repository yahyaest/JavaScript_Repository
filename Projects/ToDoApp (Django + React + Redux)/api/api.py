from api.models import Task
from rest_framework import viewsets, permissions
from .serializer import TaskSerializer

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
 # queryset = Task.objects.all() : No permission is required

 permission_classes = [
  # permissions.AllowAny  : No permission is required
  permissions.IsAuthenticated
 ]
 serializer_class = TaskSerializer

 def get_queryset(self):
  if self.request.user and self.request.user.is_superuser:
   return Task.objects.all()
  else:
   return self.request.user.tasks.all()

 def perform_create(self, serializer):
  serializer.save(owner=self.request.user)