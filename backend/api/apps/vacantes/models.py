from django.db import models
#from simple_history.models import HistoricalRecords

# Create your models here.

class Status_Vacant(models.Model):
    c204_id_status = models.AutoField(primary_key=True)
    c204_description = models.TextField(max_length=50)
    class Meta:
        verbose_name = 'Status_Vacant'
        verbose_name_plural = 'Status_Vacants'
        db_table = "c204_status_vacant"

    def __str__(self):
	    return self.c204_description


class Type_Candidate(models.Model):
    c206_id_type= models.AutoField(primary_key=True)
    c206_description = models.TextField(max_length=50)
    class Meta:
        verbose_name = 'Type_Candidate'
        verbose_name_plural = 'Type_Candidates'
        db_table = "c206_type_candidate"

    def __str__(self):
	    return self.c206_description


class Experience(models.Model):
    c207_id_experience = models.AutoField(primary_key=True)
    c207_description = models.TextField(max_length=50)
    class Meta:
        verbose_name = 'Experience'
        verbose_name_plural = 'Experiences'
        db_table = "c207_experience"

    def __str__(self):
	    return self.c207_description



class Vacant(models.Model):
    t200_id_vacant = models.AutoField(primary_key=True)
    t200_job = models.CharField(max_length=50)
    t200_description = models.TextField()
    t200_address = models.TextField()
    t200_check_time = models.DateField()
    t200_closing_hour = models.DateField()
    t200_work_days = models.CharField(max_length=7)
    t200_benefits = models.TextField()
    t200_min_salary = models.IntegerField()
    t200_max_salary = models.IntegerField()
    t200_gross_salary = models.BooleanField()
    t200_home_ofice = models.BooleanField()
    t200_open_date = models.DateField()
    t200_close_date = models.DateField()
    #t200_puestos
    #c204_id_status = models.ForeignKey(Status_Vacant, on_delete=models.CASCADE)
    #c108_id_area = models.ForeignKey(Area_Vacant, on_delete=models.CASCADE)
    #c106_id_type_candidate = models.ForeignKey(Type_Candidate, on_delete=models.CASCADE)
    #c207_id_experience = models.ForeignKey(Experience, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacant'
        verbose_name_plural = 'Vacants'
        db_table = "c200_vacant"

    def __str__(self):
	    return self.t200_id_vacant
'''class Application(models.Model):
    t201_id_application = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(Vacant, on_delete=models.CASCADE)
    #t100_boleta = models.ForeignKey(Student, on_delete=models.CASCADE)
    t200_id_vacant = models.ForeignKey(Vacant, on_delete=models.CASCADE)
    t201_cv = models.Field()
    c205_id_state = models.IntegerField(max_length=3)
    t201_date_application = models.DateField()

    class Meta:
        verbose_name = 'Application'
        verbose_name_plural = 'Applications'
        db_table = "c201_application"

    def __str__(self):
	    return self.t201_id_application
'''