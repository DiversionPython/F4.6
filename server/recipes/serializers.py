from rest_framework import serializers

from .models import Variety, Kind, Recipe


class VarietySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Variety
        fields = ('name', 'id',)


class KindSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Kind
        fields = ('name', 'id',)


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    variety = serializers.SlugRelatedField(slug_field='name',
                                       queryset=Variety.objects)  # мы будем искать объект Variety по всем записям,
    # поэтому передадим Variety.objects.all(). Но можно сократить его до Town.objects, потому что all() будет вызван под капотом.
    kind = serializers.SlugRelatedField(slug_field='name', queryset=Kind.objects)

    class Meta:
        model = Recipe
        fields = ('name', 'variety', 'kind', 'ingredients', 'recipe', 'id',)