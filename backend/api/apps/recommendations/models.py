from django.db import models
from apps.students.models import Student
from apps.vacantes.models import Vacant

"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
class Recommendation(models.Model):
    t500_id_cell = models.AutoField(primary_key=True)
    t100_id_student = models.ForeignKey(
        Student,
        null=False,
		blank=False,
        related_name='AsociatedCandidate',
        on_delete=models.CASCADE
    )
    t200_id_vacant = models.ForeignKey(
        Vacant,
        null=False,
		blank=False,
        related_name='VacantEvaluated',
        on_delete=models.CASCADE
    )
    t500_percentage = models.IntegerField(null= False,blank= False)

    class Meta:
        verbose_name = 'Recommendation'
        verbose_name_plural = 'Recommendations'
        db_table = "t500_recomendacion"

    def __str__(self) ->str:
	    return str(self.t100_id_student)+"/"+str(self.t200_id_vacant)+":"+str(self.t500_percentage)