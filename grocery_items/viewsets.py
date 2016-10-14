from rest_framework import viewsets

from .models import GroceryItem
from .serializers import GroceryItemSerializer

class GroceryItemViewSet(viewsets.ModelViewSet):
	queryset = GroceryItem.objects.all().order_by('categories')
	serializer_class = GroceryItemSerializer