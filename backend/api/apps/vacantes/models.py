from django.db import models
#from simple_history.models import HistoricalRecords

# Create your models here.
class Vacant:
    t200_id_vacant = models.AutoField(primary_key=True)
    t200_job = models.CharField(max_length=50)
    t200_description = models.TextField()
    t200_address = models.TextField()
    t200_hora_entrada = models.DateField()
    t200_hora_salida = models.DateField()
    t200_dias_laborales = models.CharField(max_length=7)
    t200_prestaciones = models.CharField()
    t200_pago_min = models.IntegerField()
    t200_pago_max = models.IntegerField()
    t200_pago_bruto = models.BooleanField()
    t200_remoto = models.BooleanField()
    t200_fecha_cierre = models.DateField()
    t200_fecha_alta = models.DateField()
    #t200_puestos

