from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Profiles(models.Model):
    name = models.CharField(max_length=50)
    height = models.IntegerField(default=0)
    weight = models.IntegerField(default=0)
    displayPicture = models.CharField(max_length=300)
    language = models.CharField(max_length=300)
    contact = models.CharField(max_length=20)
    personalStatement = models.CharField(max_length=500)
    hairColor = models.CharField(max_length=20)
    eyeColor = models.CharField(max_length=20)
    accents = models.CharField(max_length=100)
    skills = models.CharField(max_length=200)
    playAgeMin = models.IntegerField(default=25)
    playAgeMax = models.IntegerField(default=35)
    links = models.CharField(max_length=500)
    education = models.CharField(max_length=500)
    accountLinked = models.ForeignKey(User, on_delete=models.CASCADE, related_name="profiles")

    def __str__(self):
        return self.name
