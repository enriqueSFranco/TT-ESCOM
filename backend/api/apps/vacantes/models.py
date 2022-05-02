from django.db import models
from  apps.students.models import Student
from apps.administration.models import Admin
from apps.companies.models import Company,Recruiter

def upload_comunicate(instance, filename):
    return f"comunicates/{instance.t300_id_company}-{filename}"

"""----------------------------------------------------------- Catalogos --------------------------------------------------------"""

#C204 Estado vacante
class VacantStatus(models.Model):
    c204_id_status = models.AutoField(primary_key=True)
    c204_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Vacant status'
        db_table = "c204_estado_vacante"

    def __str__(self) ->str:
	    return self.c204_description

#C206 Perfil_candidato
class CandidateProfile(models.Model):
    c206_id_profile= models.AutoField(primary_key=True)
    c206_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'CandidateProfile'
        db_table = "c206_perfil_candidato"

    def __str__(self) ->str:
	    return self.c206_description

#C207 Experiencia
class Experience(models.Model):
    c207_id_experience = models.AutoField(primary_key=True)
    c207_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Experience'
        db_table = "c207_experiencia"

    def __str__(self) ->str:
	    return self.c207_description

#C205 Estado solicitud
class ApplicationState(models.Model):
    c205_id_application_state = models.AutoField(primary_key=True)
    c205_description = models.CharField(max_length=50,null=True,blank=True)

    class Meta:
        verbose_name = 'ApplicationState'
        db_table = 'c205_estado_solicitud'
    
    def __str__(self) ->str:
	    return self.c205_description        

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

#c222 CP
class Locality(models.Model):	
	c222_id = models.AutoField(primary_key=True)
	c222_cp = models.IntegerField(null=False,blank=False)
	c222_state = models.CharField(max_length=70, null=False,blank=False)
	c222_municipality = models.CharField(max_length=170, null=False,blank=False)
	c222_locality = models.CharField(max_length=170, null=False,blank=False)
	class Meta:
		verbose_name = 'locality'
		verbose_name_plural = 'localities'
		db_table = 'c222_localidades'
    
	def __str__(self) -> str:
		return self.c222_cp+":"+self.c222_state+","+self.c222_municipality+","+self.c222_locality


"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
#T200 Vacants
class Vacant(models.Model):
    t200_id_vacant = models.AutoField(primary_key=True)
    t300_id_company = models.ForeignKey(
        Company,
        blank=True,
        null=True,
        related_name='CompanyOffering',
        on_delete=models.CASCADE
    )
    t200_job = models.CharField(max_length=70)
    t200_description = models.TextField(null=True,blank=True)    
    t200_requirements = models.TextField(null=True,blank=True)
    t200_benefits = models.TextField(null=True,blank=True)    
    t200_check_time = models.TimeField(auto_now=False)
    t200_closing_hour = models.TimeField(auto_now=False)
    t200_work_days = models.CharField(max_length=7)  
    c207_id_experience = models.ForeignKey(
        Experience,
        null=False,
		blank=False,
        default=1,
		related_name='NecesaryExperience',
        on_delete=models.CASCADE)
    t200_min_salary = models.IntegerField()
    t200_max_salary = models.IntegerField()
    t200_gross_salary = models.BooleanField()
    t200_home_ofice = models.BooleanField()
    c206_id_profile = models.ForeignKey(
        CandidateProfile,
        null=True,
        blank=True,
        related_name='ProfileRequired',
        on_delete=models.CASCADE
    )
    c204_id_vacant_status = models.ForeignKey(
        VacantStatus,
        null=False,
		blank=False,
        default=1,
		related_name='ActualState',
        on_delete=models.CASCADE)
    t200_publish_date = models.DateField()
    t200_close_date = models.DateField()
    t200_state = models.CharField(max_length=50,null=True,blank=True)
    t200_mucipality = models.CharField(max_length=100,null=True,blank=True)
    t200_locality = models.CharField(max_length=100,null=False,blank=False,default='No definido')
    t200_street = models.CharField(max_length=60,null=True,blank=True)
    t200_cp = models.IntegerField(blank=True,null=True)
    t200_interior_number = models.CharField(max_length=20,blank=True,null=True)
    t200_exterior_number = models.CharField(max_length=20,blank=True,null=True)    
    t200_vacancy = models.PositiveIntegerField(default=1)
    t200_contract_type = models.CharField(max_length=50, default="Se acuerda en entrevista")
    t301_id_recruiter = models.ForeignKey(
        Recruiter,
        null=True,
        blank=True,
        related_name='RecruiterVacant',
        on_delete=models.CASCADE
    )
    t400_id_admin = models.ForeignKey(
        Admin,
        null=True,
        blank=True,
        related_name='AdminVacant',
        on_delete=models.CASCADE
    )    

    class Meta:
        verbose_name = 'Vacant'
        verbose_name_plural = 'Vacants'
        db_table = "t200_vacant"

    def __str__(self) ->str:
	    return str(self.t200_id_vacant)

#T201_applications
class Application(models.Model):
    t201_id_application = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='VacantApplicated',
		on_delete=models.CASCADE)
    t100_id_student = models.ForeignKey(        
		Student,
		null=True,
		blank=True,
		related_name='AppliedStudent',
		on_delete=models.CASCADE)    
    t201_cv = models.FileField(null=True,blank=True)
    c205_id_application_state = models.ForeignKey(
        ApplicationState,
        null=False,
		blank=False,
        default=1,
		related_name='ApplicationState',
        on_delete=models.CASCADE
    )
    t201_date_application = models.DateField()

    class Meta:
        verbose_name = 'Application'
        verbose_name_plural = 'Applications'
        db_table = "t201_application"

    def __str__(self) ->str:
	    return str(self.t201_id_application)

#T202 Comunicados
class Announcement(models.Model):
    t202_id_announcement = models.AutoField(primary_key=True)
    t202_title = models.CharField(max_length=50,blank=False,null=False)#<-Titulo
    t202_announcement = models.FileField(null=True,blank=True,upload_to=upload_comunicate)
    t202_description = models.TextField()
    t202_link = models.CharField(max_length=60,blank=True,null=True)#enlaces
    t300_id_company = models.ForeignKey(
        Company,
        blank=True,
        null=True,
        related_name='CompanyCommunicate',
        on_delete=models.CASCADE
    )
    t202_publish_date = models.DateField(null=True)
    t202_close_date = models.DateField(null=True)
    t301_id_recruiter = models.ForeignKey(
        Recruiter,
        null=True,
        blank=True,
        related_name='RecruiterCommunicate',
        on_delete=models.CASCADE
    )
    t400_id_admin = models.ForeignKey(
        Admin,
        null=True,
        blank=True,
        related_name='AdminCommunicate',
        on_delete=models.CASCADE
    ) 

    class Meta:
        verbose_name = 'Annuncement'
        verbose_name_plural = 'Annuncements'
        db_table = 't202_comunicados'

    def __str__ (self)->str:
        return self.t202_id_announcement+": "+self.t202_announcement

#T203 Reportes
class Report(models.Model):
    t203_id_report = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='Report',
		on_delete=models.CASCADE)
    t203_publish_type = models.CharField(max_length=15,blank=True,null=True)#Vacante/Comunicado
    t100_id_student = models.ForeignKey(        
		Student,
		null=True,
		blank=True,
		related_name='ReportStudent',
		on_delete=models.CASCADE)    
    t300_id_company = models.ForeignKey(
        Company,
        blank=True,
        null=True,
        related_name='CompanyReport',
        on_delete=models.CASCADE
    )
    c210_report_type = models.ForeignKey(
        ReportType,
        null=False,
		blank=False,
		related_name='ReportType',
        default=1,
        on_delete=models.CASCADE
    )
    c220_report_state = models.ForeignKey(
        ReportState,
        null=False,
		blank=False,
        default=1,
		related_name='StudentLenguages',        
        on_delete=models.CASCADE
    )
    t203_report_date = models.DateField(null=True)
    t400_id_admin = models.ForeignKey(
        Admin,
        null=True,
        blank=True,
        related_name='AttendaceAdmin',
        on_delete=models.CASCADE
    ) 
    t203_atention_date = models.DateField(null=True)
    t203_adittional_comment = models.TextField(null=True,blank=True)

    class Meta:
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'
        db_table = 't203_reportes'

    def __str__(self) -> str:
        return self.t203_id_report    

