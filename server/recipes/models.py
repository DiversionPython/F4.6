from django.db import models


class Variety(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'


class Kind(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'


class Recipe(models.Model):
    name = models.CharField(max_length=30)
    variety = models.ForeignKey(Variety, on_delete=models.CASCADE)
    kind = models.ForeignKey(Kind, on_delete=models.CASCADE)
    ingredients = models.TextField(default='')
    recipe = models.TextField(default='')

    def __str__(self):
        return f"Название блюда- {self.name[0:10]}{'...'} Вид- {self.variety} Тип- {self.kind} Рецепт- {self.recipe[0:30]}{'...'}"
