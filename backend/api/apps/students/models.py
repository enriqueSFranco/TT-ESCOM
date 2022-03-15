from django.db import models

# Create your models here.
class Student(models.Model):
	t100_boleta = models.CharField(max_length=12, null=False, blank=False)
	t100_name = models.CharField(max_length=50, null=False, blank=False)
	t100_last_name = models.CharField(max_length=50, null=True, blank=True)
	t100_username = models.CharField(max_length=40, null=True, blank=True)
	t100_password = models.CharField(max_length=100, null=False, blank=False)
	t100_rfc = models.CharField(max_length=12, null=True, blank=True)
	t100_nss = models.CharField(max_length=12, blank=True, null=True)
	t100_cv = models.FileField(null=True, blank=True)
	t100_email = models.EmailField(max_length=50, null=False, blank=False)
	genders = [
		('F', 'Femenino'),
		('M', 'Masculino')
	]
	t100_gender = models.CharField(max_length=1, choices=genders, default='F', null=True, blank=True)
	t100_academic_level = models.PositiveSmallIntegerField(null=True, blank=True)
	t100_date_of_birth = models.DateField(null=True, blank=True)
	t100_travel = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)

	class Meta:
		unique_together = ['t100_boleta', 't100_email']
		verbose_name = 'Student'
		verbose_name_plural = 'Students'
		db_table = "student"

	def __str__(self):
		return self.t100_name


class Skill(models.Model):
	t102_id_skill = models.AutoField(primary_key=True)
	t102_description = models.CharField(max_length=100)
	t100_boleta = models.ForeignKey(
		Student, 
		null=True, 
		blank=True, 
		related_name='Student',
		on_delete=models.CASCADE
	)

	class Meta:
		verbose_name = "Skill"
		verbose_name_plural = "Skills"
		db_table = "Skill"

	def __str__(self) -> str:
		return self.t102_description
