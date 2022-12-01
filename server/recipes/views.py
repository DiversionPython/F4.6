from rest_framework import viewsets

from .serializers import KindSerializer, VarietySerializer, RecipeSerializer
from .models import Variety, Kind, Recipe

class KindViewSet(viewsets.ModelViewSet):
    queryset = Kind.objects.all().order_by('name')
    serializer_class = KindSerializer

class VarietyViewSet(viewsets.ModelViewSet):
    queryset = Variety.objects.all().order_by('name')
    serializer_class = VarietySerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('name')
    serializer_class = RecipeSerializer
