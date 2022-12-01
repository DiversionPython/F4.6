from django.contrib import admin
from .models import Variety, Kind, Recipe

admin.site.register(Variety)
admin.site.register(Kind)
admin.site.register(Recipe)