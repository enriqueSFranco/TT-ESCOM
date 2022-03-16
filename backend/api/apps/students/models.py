from tabnanny import verbose
from django.db import models

<<<<<<< HEAD
# Create your models here.
class Student(models.Model):
	t100_boleta = models.CharField(max_length=12, null=False, blank=False)
=======
"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
#T100 Alumno
class Student(models.Model):	
	t100_boleta = models.CharField(primary_key=True,max_length=12, null=False, blank=False)
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
	t100_name = models.CharField(max_length=50, null=False, blank=False)
	t100_last_name = models.CharField(max_length=50, null=True, blank=True)
	t100_username = models.CharField(max_length=40, null=True, blank=True)
	t100_password = models.CharField(max_length=100, null=False, blank=False)
<<<<<<< HEAD
	t100_rfc = models.CharField(max_length=12, null=True, blank=True)
	t100_nss = models.CharField(max_length=12, blank=True, null=True)
=======
	#t100_rfc = models.CharField(max_length=12, null=True, blank=True)
	#t100_nss = models.CharField(max_length=12, blank=True, null=True)
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
	t100_cv = models.FileField(null=True, blank=True)
	t100_email = models.EmailField(max_length=50, null=False, blank=False)
	genders = [
		('F', 'Femenino'),
		('M', 'Masculino')
	]
	t100_gender = models.CharField(max_length=1, choices=genders, default='F', null=True, blank=True)
<<<<<<< HEAD
	t100_academic_level = models.PositiveSmallIntegerField(null=True, blank=True)
=======
	#t100_academic_level = models.PositiveSmallIntegerField(null=True, blank=True)
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
	t100_date_of_birth = models.DateField(null=True, blank=True)
	t100_travel = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)

	class Meta:
		unique_together = ['t100_boleta', 't100_email']
		verbose_name = 'Student'
		verbose_name_plural = 'Students'
<<<<<<< HEAD
		db_table = "student"
=======
		db_table = "t100_alumno"
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae

	def __str__(self):
		return self.t100_name

<<<<<<< HEAD

class Skill(models.Model):
	t102_id_skill = models.AutoField(primary_key=True)
	t102_description = models.CharField(max_length=100)
=======
#T101 Domicilio
class residence(models.Model):
	estados=[
		('01' ,'AGUASCALIENTES'),
		('02' ,'BAJA CALIFORNIA'),
		('03' ,'BAJA CALIFORNIA SUR'),
		('04' ,'CAMPECHE'),
		('05' ,'COAHUILA'),
		('06' ,'COLIMA'),
		('07' ,'CHIAPAS'),
		('08' ,'CHIHUAHUA'),
		('09' ,'CIUDAD DE MEXICO'),
		('10' ,'DURANGO'),
		('11' ,'GUANAJUATO'),
		('12' ,'GUERRERO'),
		('13' ,'HIDALGO'),
		('14' ,'JALISCO'),
		('15' ,'MEXICO'),
		('16' ,'MICHOACAN'),
		('17' ,'MORELOS'),
		('18' ,'NAYARIT'),
		('19' ,'NUEVO LEON'),
		('20' ,'OAXACA'),
		('21' ,'PUEBLA'),
		('22' ,'QUERETARO DE ARTEAGA'),
		('23' ,'QUINTANA ROO'),
		('24' ,'SAN LUIS POTOSI'),
		('25' ,'SINALOA'),
		('26' ,'SONORA'),
		('27' ,'TABASCO'),
		('28' ,'TAMAULIPAS'),
		('29' ,'TLAXCALA'),
		('30' ,'VERACRUZ '),
		('31' ,'YUCATAN'),
		('32' ,'ZACATECAS'),
		('33' ,'NO ESPECIFICADA')
	]
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentResidence',
		on_delete=models.CASCADE)
	t101_state = models.CharField(max_length=50,choices=estados,default='33',null=True,blank=True)
	t101_municipality = models.CharField(max_length=70,null=True,blank=True)
	t101_locality = models.CharField(max_length=100,null=True,blank=True)

	class Meta:
		verbose_name = 'Residence'
		db_table='t101_domicilio'

	def __str__ (self):
		return ""+self.t101_state+", "+self.t101_mucipality


#T102 Habilidades
class StudentSkill(models.Model):
	t102_id_skill = models.AutoField(primary_key=True)
	#t102_description = models.CharField(max_length=100,null=True,blank=True)
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
	t100_boleta = models.ForeignKey(
		Student, 
		null=True, 
		blank=True, 
<<<<<<< HEAD
		related_name='Student',
=======
		related_name='StudentSkills',
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
		on_delete=models.CASCADE
	)

	class Meta:
<<<<<<< HEAD
		verbose_name = "Skill"
		verbose_name_plural = "Skills"
		db_table = "Skill"

	def __str__(self) -> str:
		return self.t102_description
=======
		verbose_name = "StudentSkill"
		verbose_name_plural = "StudentSkills"
		db_table = "t102_habilidades"

	def __str__(self):
		return self.t102_description

#T104 Historial academico
class AcademicHistory(models.Model):
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentAcademics',
		on_delete=models.CASCADE)
	t104_academic_unit = models.CharField(max_length=100,null=True,blank=True)
	t104_carreer = models.CharField(max_length=100,null=True,blank=True)
	#c107_id_academic_level =
	#C108_id_area = 
	#c109_id_academic_state =
	t104_start_date = models.DateField(null=True,blank=True)
	t104_end_date = models.DateField(null=True,blank=True)

	class Meta:
		verbose_name="Academic history"
		db_table="t104_historial_academico"
	
	def __str__ (self) ->str:
		return self.t104_academic_unit+" : "+self.t104_carreer

#T113 Areas de interes
class InterestArea(models.Model):
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentInterests',
		on_delete=models.CASCADE)
	#c108_id_area=

	class Meta:
		verbose_name="Areas of interest"
		db_table="t113_areas_interes"
	def __str__ (self):
		return "Areas de interes"

#T114 Enlaces
class Link(models.Model):
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentLinks',
		on_delete=models.CASCADE)
	t113_link = models.CharField(max_length=100,blank=True,null=True)
	#c115_id_network=

	class Meta:
		verbose_name="Link"
		verbose_name_plural="Links"
		db_table='t114_enlaces'

	def __str__(self)->str:
		return self.t113_link

#T110 Idiomas
class StudentLenguage(models.Model):
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentLenguages',
		on_delete=models.CASCADE)
	#c111_id_language
	t110_written_level = models.PositiveSmallIntegerField(null=True, blank=True)
	t110_reading_level = models.PositiveSmallIntegerField(null=True, blank=True)
	t110_speaking_level = models.PositiveSmallIntegerField(null=True, blank=True)
	t110_comprension_level = models.PositiveSmallIntegerField(null=True, blank=True)
	t110_native = models.BooleanField(default=False)

	class Meta:
		verbose_name='StudentLenguage'
		verbose_name_plural='StudentLenguages'
		db_table='t110_idiomas'
	
	def __str__(self)->str:
		return self.t110_written_level+" "+self.t110_reading_level

#T103 Historial laboral
class EmploymentHistory(models.Model):
	t100_boleta = models.ForeignKey(
		Student,
		null=True,
		blank=True,
		related_name='StudentEmployments',
		on_delete=models.CASCADE)
	t103_corporation = models.CharField(max_length=80,null=True,blank=True)	
	t103_employment = models.CharField(max_length=80,null=True,blank=True)
	t103_description = models.TextField()
	t103_start_date = models.DateField(null=True)
	t103_end_date = models.DateField(null=True)

	class Meta:
		verbose_name='Employment history'
		db_table='t103_historial_laboral'
	
	def __str__(self)->str:
		return self.t103_corporation+', '+self.t103_employment
		

"""----------------------------------------------------------- Catalogos --------------------------------------------------------"""

#C107 Nivel academico
class AcademicLevel(models.Model):
	c107_id_academic_level = models.AutoField(primary_key=True)
	c107_description = models.CharField(max_length=60,blank=True,null=True)

	class Meta:
		verbose_name = 'AcademicLevel'
		db_table = 'c107_nivel_academico'
	
	def __str__(self) -> str:
		return self.c107_description

#C109 Estado academico
class AcademicState(models.Model):
	c109_id_academic_state = models.AutoField(primary_key=True)
	c109_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'AcademicState'
		db_table = 'c109_estado_academico'
	
	def __str__(self) -> str:
		return self.c109_description

#C108 Area estudio
class StudyArea(models.Model):
	c108_id_study_area = models.AutoField(primary_key=True)
	c108_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'StudyArea'
		db_table = 'c108_area_estudio'
	
	def __str__(self) -> str:
		return self.c108_description		


#C115 Plataformas
class Plataform(models.Model):
	c115_id_plataform = models.AutoField(primary_key=True)
	c115_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'Plataform'
		verbose_name_plural ='Plataforms'
		db_table = 'c115_plataformas'
	
	def __str__(self) -> str:
		return self.c115_description

#C111 Idiomas
"""class Lenguage(models.Model):
	c111_id_lenguage = models.AutoField(primary_key=True)
	c111_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'Lenguange'
		verbose_name_plural = 'Lenguages'
		db_table = 'c111_idiomas'
	
	def __str__(self) -> str:
		return self.c111_description		"""

#C116 habilidades
class Skills(models.Model):
	c116_id_skill = models.AutoField(primary_key=True)
	c116_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'Skill'
		verbose_name_plural = 'Skills'
		db_table = 'c116_habilidades'
	
	def __str__(self) -> str:
		return self.c116_description		
>>>>>>> 6337219edaab73675865f1dd4b1e06fe89ce2fae
