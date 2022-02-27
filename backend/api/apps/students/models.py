from django.db import models
from apps.users.models import User

# Create your models here.

class Solocitud():
  id_soliticitud
  pass

class Habilidad(models.Model):
  id_habilidad = models.IntegerField()
  boleta = models.CharField()
  pass

class Student(User):
  grado_estudio = models.CharField()
  cv = models.FieldFile()

  class Meta:
    pass