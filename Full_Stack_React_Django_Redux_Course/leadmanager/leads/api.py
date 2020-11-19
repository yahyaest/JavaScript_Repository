from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializer import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
 # queryset = Lead.objects.all()  : No permission is required
 permission_classes = [
  # permissions.AllowAny  : No permission is required
    permissions.IsAuthenticated
 ]

 serializer_class = LeadSerializer

 def get_queryset(self):
  return self.request.user.leads.all()

 def perform_create(self, serializer):
  serializer.save(owner=self.request.user)