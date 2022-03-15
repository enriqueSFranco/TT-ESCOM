from django.db import models
from  apps.students.models import Student

"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
#T200 Vacants
class Vacant(models.Model):
    t200_id_vacant = models.AutoField(primary_key=True)
    #t300_id_company =
    t200_job = models.CharField(max_length=70)
    t200_description = models.TextField()    
    t200_check_time = models.DateField()
    t200_closing_hour = models.DateField()
    t200_work_days = models.CharField(max_length=7)  
    #c207_id_experience = models.ForeignKey(Experience, on_delete=models.CASCADE)
    #c207_id_experience = models.ForeignKey(Experience, on_delete=models.CASCADE)  
    t200_min_salary = models.IntegerField()
    t200_max_salary = models.IntegerField()
    t200_gross_salary = models.BooleanField()
    t200_home_ofice = models.BooleanField()
    #c204_id_vacant_status = models.ForeignKey(Status_Vacant, on_delete=models.CASCADE)
    t200_publish_date = models.DateField()
    t200_close_date = models.DateField()
    #t301_id_recruiter =
    #t400_id_administrator =
    #t200_vacancy    

    class Meta:
        verbose_name = 'Vacant'
        verbose_name_plural = 'Vacants'
        db_table = "c200_vacant"

    def __str__(self):
	    return self.t200_id_vacant

#T201_applications
class Application(models.Model):
    t201_id_application = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='StudentApplication',
		on_delete=models.CASCADE)
    t100_boleta = models.ForeignKey(        
		Student,
		null=True,
		blank=True,
		related_name='AppliedStudent',
		on_delete=models.CASCADE)    
    t201_cv = models.FileField(null=True,blank=True)
    #c205_id_application_state = models.IntegerField()
    t201_date_application = models.DateField()

    class Meta:
        verbose_name = 'Application'
        verbose_name_plural = 'Applications'
        db_table = "c201_application"

    def __str__(self):
	    return self.t201_id_application

#T213 Ubicacion
class Ubication(models.Model):
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='ApplicationUbication',
		on_delete=models.CASCADE)
    t213_state = models.CharField(max_length=30,null=False,blank=False,default='No definido')
    t213_mucipality = models.CharField(max_length=70,null=False,blank=False,default='No definido')
    t213_locality = models.CharField(max_length=100,null=False,blank=False,default='No definido')
    t213_street = models.CharField(max_length=60,null=True,blank=True)
    t213_cp = models.IntegerField(blank=True,null=True)
    t213_interior_number = models.CharField(max_length=20,blank=True,null=True)
    t213_exterior_number = models.CharField(max_length=20,blank=True,null=True)

    class Meta:
        verbose_name = 'Ubication'
        db_table = 't213_ubicacion'
    
    def __str__(self)->str:
        return self.t213_state+","+self.t213_mucipality+","+self.t213_locality

#T202 Comunicados
class Announcement(models.Model):
    t202_id_announcement = models.AutoField(primary_key=True)
    t202_announcement = models.FileField()
    T202_description = models.TextField()
    #t300_id_company =
    t202_publish_date = models.DateField(null=True)
    t202_close_date = models.DateField(null=True)
    #t400_id_administrador =     

    class Meta:
        verbose_name = 'Annuncement'
        verbose_name_plural = 'Annuncements'
        db_table = 't202_comunicados'

    def __str__ (self)->str:
        return self.t202_id_announcement

#T203 Reportes
class Report(models.Model):
    t203_id_report = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='Report',
		on_delete=models.CASCADE)
    t203_publish_type = models.BooleanField(default=True)#True->Vacante,False->Comunicado
    t100_boleta = models.ForeignKey(        
		Student,
		null=True,
		blank=True,
		related_name='ReportStudent',
		on_delete=models.CASCADE)    
    #t300_id_company =
    #c210_report_type = 
    #c220_report_state =
    t203_report_date = models.DateField(null=True)
    #t400_id_admin = 
    t203_atention_date = models.DateField(null=True)
    t203_adittional_comment = models.TextField(null=True,blank=True)

    class Meta:
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'
        db_table = 't203_reportes'

    def __str__(self) -> str:
        return self.t203_id_report    

"""----------------------------------------------------------- Catalogos --------------------------------------------------------"""

#C204 Estado vacante
class VacantStatus(models.Model):
    c204_id_status = models.AutoField(primary_key=True)
    c204_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Vacant status'
        db_table = "c204_estado_vacante"

    def __str__(self):
	    return self.c204_description

#C206 Perfil_candidato
class CandidateProfile(models.Model):
    c206_id_profile= models.AutoField(primary_key=True)
    c206_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'CandidateProfile'
        db_table = "c206_perfil_candidato"

    def __str__(self):
	    return self.c206_description

#C207 Experiencia
class Experience(models.Model):
    c207_id_experience = models.AutoField(primary_key=True)
    c207_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Experience'
        db_table = "c207_experiencia"

    def __str__(self):
	    return self.c207_description

#C205 Estado solicitud
class ApplicationState(models.Model):
    c205_id_application_state = models.AutoField(primary_key=True)
    c205_description = models.CharField(max_length=50,null=True,blank=True)

    class Meta:
        verbose_name = 'ApplicationState'
        db_table = 'c205_estado_solicitud'

#C210 Tipo reporte
class ReportType(models.Model):
    c210_id_report_type = models.AutoField(primary_key=True)
    c210_description = models.CharField(max_length=60,null=True,blank=True)

    class Meta:
        verbose_name = 'ReportType'
        db_table = 'c210_tipo_reporte'
    
    def __str__(self) -> str:
        return self.c210_description

#C220 Estado reporte
class ReportState(models.Model):
    c220_id_report_state = models.AutoField(primary_key=True)
    c220_description = models.CharField(max_length=60,null=True,blank=True)

    class Meta:
        verbose_name = 'ReporteState'
        db_table = 'c220_estado_reporte'

    def __str__(self) -> str:
        return self.c220_description