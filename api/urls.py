from django.conf.urls import include, url
from rest_framework import routers

from groceries.viewsets import GroceryViewSet

router = routers.DefaultRouter()
router.register(r'groceries', GroceryViewSet)

urlpatterns = [
	url(r'^', include(router.urls)),
]