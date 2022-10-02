from django.contrib.auth.models import  AbstractBaseUser,PermissionsMixin
from apps.users.models import User
from drf_extra_fields.fields import Base64FileField
import PyPDF2
import io
#from apps.vacantes import models

#from turtle import ondrag
from django.db import models

def upload_image_profile(instance, filename):
    return f"profile_pictures/{instance.t100_boleta}-{filename}"

def upload_project_banner(instance, filename):
    return f"projects_pictures/{instance.t100_id_student}-{filename}"

def upload_platoform_icon(instance, filename):
    return f"icons/{instance.t100_id_student}-{filename}"

def upload_cv(instance, filename):
    return f"files/{instance.t100_boleta}-{filename}"	

class PDFBase64File(Base64FileField):
    ALLOWED_TYPES = ['pdf']

    def get_file_extension(self, filename, decoded_file):
        try:
            PyPDF2.PdfFileReader(io.BytesIO(decoded_file))
        except PyPDF2.utils.PdfReadError as e:
            logger.warning(e)
        else:
            return 'pdf'

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

#C108 Unidades academicas
class AcademicUnit(models.Model):
	c108_id_academic_unit = models.AutoField(primary_key=True)
	c108_academic_unit = models.CharField(max_length=150,null=True,blank=True)

	class Meta: 
		verbose_name = "Acadmic Units"
		db_table = "c108_unidades_academicas"

	def __str__(self) -> str:
		return self.c108_academic_unit


#C111 Puesto de interes
class InterestJob(models.Model):
	c111_id_job = models.AutoField(primary_key=True)
	c111_job = models.CharField(max_length=60,null=False,blank=False,default="no definido")

	class Meta:
		verbose_name = 'InterestJob'
		db_table = 'c111_puesto_interes'
	
	def __str__(self) -> str:
		return self.c111_job


#C115 Plataformas
class Plataform(models.Model):
	c115_id_plataform = models.AutoField(primary_key=True)
	c115_description = models.CharField(max_length=60,blank=True,null=True)
	c115_icon = models.ImageField(blank=True,null=True,default="",upload_to=upload_platoform_icon)

	class Meta:
		verbose_name = 'Plataform'
		verbose_name_plural ='Plataforms'
		db_table = 'c115_plataformas'
	
	def __str__(self) -> str:
		return self.c115_description

#C116 habilidades
class Skills(models.Model):
	c116_id_skill = models.AutoField(primary_key=True)
	c116_description = models.CharField(max_length=60,blank=False,null=False)	
	c116_type = models.CharField(max_length=1,blank=False,null=False)

	class Meta:
		verbose_name = 'Skill'
		verbose_name_plural = 'Skills'
		db_table = 'c116_habilidades'
	
	def __str__(self) -> str:
		return self.c116_description	
			

#C111 Idiomas
class Language(models.Model):
	c111_id_language = models.AutoField(primary_key=True)
	c111_description = models.CharField(max_length=60,blank=True,null=True)	
	c111_type = models.CharField(max_length=20,blank=True,null=True)
	class Meta:
		verbose_name = 'Languange'
		verbose_name_plural = 'Languages'
		db_table = 'c111_idiomas'
	
	def __str__(self) -> str:
		return self.c111_description


#C118 Tipo de proyecto
class ProjectType(models.Model):
	c118_id_type = models.AutoField(primary_key=True)
	c118_description = models.CharField(max_length=60,blank=True,null=True)	

	class Meta:
		verbose_name = 'Project type'
		verbose_name_plural = 'Project types'
		db_table = 'c118_tipo_proyecto'
	
	def __str__(self) -> str:
		return self.c118_description		



"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
#T100 Alumno
class Student(models.Model):	
	id_user = models.OneToOneField(User,on_delete=models.CASCADE,null=False,blank=False)
	t100_id_student = models.AutoField(primary_key=True)
	t100_boleta = models.CharField(max_length=14, null=True, blank=True)
	t100_name = models.CharField(max_length=50, null=True, blank=True)
	t100_last_name = models.CharField(max_length=50, null=True, blank=True)
	t100_second_surname = models.CharField(max_length=50, null=True, blank=True)
	t100_username = models.CharField(max_length=40, null=True, blank=True)
	t100_cv = models.FileField(null=True, blank=True,default="",upload_to=upload_cv)
	t100_email = models.EmailField(unique=True,max_length=50, null=False, blank=False)
	genders = [
		('F', 'Femenino'),
		('M', 'Masculino')
	]
	t100_gender = models.CharField(max_length=1, choices=genders, default='F', null=True, blank=True)	
	t100_date_of_birth = models.DateField(null=True, blank=True)
	t100_personal_objectives = models.TextField(null=True, blank=True)
	t100_speciality = models.CharField(max_length=100,null=True,blank=True)
	t100_phonenumber = models.PositiveBigIntegerField (null=True,blank=True)
	t100_residence = models.CharField(max_length=100,null=True,blank=True)
	c222_id_locality = models.ForeignKey(
        'vacantes.Locality',
        null=True,
		blank=True,
		related_name='StudentLocality',
        on_delete=models.CASCADE)
	t100_modalities = models.CharField(max_length=20,null=True,blank=True)
	t100_target_salary = models.PositiveIntegerField(null=True, blank=True)	
	t100_travel = models.BooleanField(default=False)
	t100_interest_job = models.CharField(max_length=70,null=True,blank=True)
	t100_profile_picture = models.ImageField(blank=True,null=True,default="",upload_to=upload_image_profile)
	is_active = models.BooleanField(default=False)

	USERNAME_FIELD = 't100_email'
	class Meta:		
		verbose_name = 'Student'
		verbose_name_plural = 'Students'
		db_table = "t100_alumno"
	def __str__(self):
		return self.t100_email

#T102 Habilidades
class StudentSkill(models.Model):	
	t102_id_registrer = models.AutoField(primary_key=True)
	c116_id_skill = models.ForeignKey(
		Skills,
		null=False,
		blank=False,
		related_name='SkillDescription',
		on_delete=models.CASCADE,
		default=1
	)
	t100_id_student = models.ForeignKey(
		Student, 
		null=False, 
		blank=False, 
		default=1,
		related_name='StudentSkills',
		on_delete=models.CASCADE
	)

	class Meta:
		unique_together = ['t100_id_student','c116_id_skill']
		verbose_name = "StudentSkill"
		verbose_name_plural = "StudentSkills"
		db_table = "t102_habilidades"

	def __str__(self) -> str:
		return str(self.t102_id_registrer)+","+str(self.t100_id_student)

#T104 Historial academico
class AcademicHistory(models.Model):
	t104_id_registrer = models.AutoField(primary_key=True)
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentAcademics',
		on_delete=models.CASCADE)
	t104_academic_unit = models.CharField(max_length=150,null=True,blank=True)
	t104_carreer = models.CharField(max_length=100,null=True,blank=True)
	c107_id_academic_level = models.ForeignKey(
		AcademicLevel,
		null=False,
		blank=False,		
		related_name='AcademicLevel',
		on_delete=models.CASCADE,
		default=1
	)
	#C108_id_area = 
	c109_id_academic_state = models.ForeignKey(
		AcademicState,
		null=False,
		blank=False,
		related_name='AcadmeicState',
		on_delete=models.CASCADE,
		default=1
	)
	t104_start_date = models.DateField(null=True,blank=True)
	t104_end_date = models.DateField(null=True,blank=True)

	class Meta:
		unique_together = ['t100_id_student','t104_carreer','t104_academic_unit']
		verbose_name="Academic history"
		db_table="t104_historial_academico"
	
	def __str__ (self) ->str:
		return self.t104_academic_unit+" : "+self.t104_carreer



#T114 Enlaces
class Link(models.Model):
	t114_id_registrer = models.AutoField(primary_key=True)
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentLinks',
		on_delete=models.CASCADE)
	t113_link = models.CharField(max_length=100,blank=True,null=True)
	c115_id_plataform = models.ForeignKey(
		Plataform,
		null=False,
		blank=False,
		default=1,
		related_name='PlataformDescription',
		on_delete=models.CASCADE)	

	class Meta:
		unique_together = ['t100_id_student','c115_id_plataform']
		verbose_name="Link"
		verbose_name_plural="Links"
		db_table='t114_enlaces'

	def __str__(self)->str:
		return self.t113_link

#T110 Idiomas
class StudentLanguage(models.Model):
	t110_id_registrer = models.AutoField(primary_key=True)
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentLanguages',
		on_delete=models.CASCADE)
	c111_id_language = models.ForeignKey(
		Language,#"Language.c111_id_lenguage",
		null=False,
		blank=False,
		default=1,
		related_name='LanguageDescription',
		on_delete=models.CASCADE)
	t110_level_description = models.CharField(max_length=50,null=True,blank=True)
	t110_level = models.PositiveSmallIntegerField(null=True,blank=True)
	class Meta:
		unique_together = ['t100_id_student','c111_id_language']
		verbose_name='StudentLanguage'
		verbose_name_plural='StudentLanguages'
		db_table='t110_idiomas'
	
	def __str__(self):
		return str(self.t110_written_level) #+" "+self.t110_reading_level

#T103 Historial laboral
class EmploymentHistory(models.Model):
	t103_id_registrer = models.AutoField(primary_key=True)
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentEmployments',
		on_delete=models.CASCADE)
	t103_corporation = models.CharField(max_length=80,null=True,blank=True)	
	t103_employment = models.CharField(max_length=80,null=True,blank=True)
	t103_description = models.TextField()
	t103_start_date = models.DateField(null=True)
	t103_end_date = models.DateField(null=True)

	class Meta:
		unique_together = ['t100_id_student','t103_corporation']
		verbose_name='Employment history'
		db_table='t103_historial_laboral'
	
	def __str__(self)->str:
		return self.t103_corporation+', '+self.t103_employment
		
#T117 Proyectos personales
class PersonalProjects(models.Model):
	t117_id_registrer = models.AutoField(primary_key=True)
	t117_project_name = models.CharField(max_length=100,blank=True,null=True)
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentProjects',
		on_delete=models.CASCADE)
	t117_group = models.CharField(max_length=80,null=True,blank=True)	
	t117_job = models.CharField(max_length=80,null=True,blank=True)
	t117_link = models.CharField(max_length=100,blank=True,null=True)
	t117_description = models.TextField()
	t117_start_date = models.DateField(null=True)
	t117_end_date = models.DateField(null=True)	
	c118_project_type = models.ForeignKey(
		ProjectType,
		null=False,
		blank=False,
		default=1,
		related_name='ProjectType',
		on_delete=models.CASCADE)

	class Meta:		
		verbose_name='Employment history'
		db_table='t117_proyectos'
	
	def __str__(self)->str:
		return self.t117_group+', '+self.t117_job


#T119 Certificaciones
class Certifications(models.Model):
	t119_id_registrer = models.AutoField(primary_key=True)	
	t100_id_student = models.ForeignKey(
		Student,
		null=False,
		blank=False,
		default=1,
		related_name='StudentCertification',
		on_delete=models.CASCADE)
	t119_certification = models.CharField(max_length=150,null=False,blank=False)
	t119_company = models.CharField(max_length=150,blank=True,null=False)
	t119_start_date = models.DateField(null=True,blank=True)
	t119_end_date = models.DateField(null=True,blank=True)
	t119_in_course = models.BooleanField(default=False)
	t119_voucher_link = models.CharField(max_length=200,null=True,blank=True)
	
	class Meta:		
		verbose_name='Certification'
		verbose_name_plural='Certifications'
		db_table='t119_certificacion'
	
	def __str__(self)->str:
		return self.t119_certification