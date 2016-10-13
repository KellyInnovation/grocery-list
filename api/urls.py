from django.conf.urls import include, url
from rest_framework import routers

from grocery_items.viewsets import GroceryItemViewSet

router = routers.DefaultRouter()
router.register(r'grocery_items', GroceryItemViewSet)

urlpatterns = [
	url(r'^', include(router.urls)),
]