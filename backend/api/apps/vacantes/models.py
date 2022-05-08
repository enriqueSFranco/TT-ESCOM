from django.db import models
from  apps.students.models import Student,Skills,Lenguage
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

#C208 Tipo de contratacion
class Contract(models.Model):
    c208_id_contract = models.AutoField(primary_key=True)
    c208_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Contract'
        db_table = "c208_tipo_contrato"

    def __str__(self) ->str:
	    return self.c208_description      

#C209 Estado del Reporte
class ReportState(models.Model):
    c209_id_state = models.AutoField(primary_key=True)
    c209_description = models.TextField(max_length=50,null=True,blank=True)
    
    class Meta:
        verbose_name = 'ReportState'
        db_table = "c209_estado_reporte"

    def __str__(self) ->str:
	    return self.c209_description                   

#C210 Tipo reporte
class ReportType(models.Model):
    c210_id_report_type = models.AutoField(primary_key=True)
    c210_description = models.CharField(max_length=60,null=True,blank=True)

    class Meta:
        verbose_name = 'ReportType'
        db_table = 'c210_tipo_reporte'
    
    def __str__(self) -> str:
        return self.c210_description

#C214 Modalidad de Trabajo
class Modality(models.Model):
    c214_id_modality = models.AutoField(primary_key=True)
    c214_description = models.CharField(max_length=50,null=True,blank=True)

    class Meta:
        verbose_name = 'ReportType'
        db_table = 'c214_modalidad_trabajo'
    
    def __str__(self) -> str:
        return self.c214_description        


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
    t200_benefits = models.TextField(null=True,blank=True)    
    t200_check_time = models.TimeField(auto_now=False)
    t200_closing_hour = models.TimeField(auto_now=False)
    t200_work_days = models.CharField(max_length=7,blank=True,null=True,default="1111100")  
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
    t200_home_ofice = models.BooleanField(default=True)#c214_id_modality
    #c214_id_modality = models
    c206_id_profile = models.ForeignKey(
        CandidateProfile,
        null=True,
        blank=True,
        default=1,
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
    t200_municipality = models.CharField(max_length=100,null=True,blank=True)
    t200_locality = models.CharField(max_length=100,null=False,blank=False,default='No definido')
    t200_street = models.CharField(max_length=60,null=True,blank=True)
    t200_cp = models.IntegerField(blank=True,null=True)
    t200_interior_number = models.CharField(max_length=20,blank=True,null=True)
    t200_exterior_number = models.CharField(max_length=20,blank=True,null=True)    
    t200_vacancy = models.PositiveIntegerField(default=1)
    c208_id_contract = models.ForeignKey(
        Contract,
        null=False,
		blank=False,
        default=1,
		related_name='ContractType',
        on_delete=models.CASCADE)
    t301_id_recruiter = models.ForeignKey(
        Recruiter,
        null=True,
        blank=True,
        related_name='RecruiterVacant',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Vacant'
        verbose_name_plural = 'Vacants'
        db_table = "t200_vacante"

    def __str__(self) ->str:
	    return str(self.t200_id_vacant)

#T214 Requerimiento
class Requirement(models.Model):
    t214_id_requirement = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='VacantRequirement',
		on_delete=models.CASCADE)
    c116_id_skill = models.ForeignKey(
		Skills,
		null=False,
		blank=False,
		related_name='SkillRequired',
		on_delete=models.CASCADE
	)
    class Meta:
        verbose_name = 'Requirement'
        verbose_name_plural = 'Requierements'
        db_table = "t214_requerimiento"

    def __str__(self) ->str:
	    return str(self.t214_id_requirement)


#T215 Idioma 
class LenguageRequired (models.Model):
    t215_id_lenguage = models.AutoField(primary_key=True)
    t200_id_vacant = models.ForeignKey(
		Vacant,
		null=True,
		blank=True,
		related_name='VacantLenguange',
		on_delete=models.CASCADE)
    c111_id_language = models.ForeignKey(
		Lenguage,#"Lenguage.c111_id_lenguage",
		null=False,
		blank=False,
		related_name='LenguageRequired',
		on_delete=models.CASCADE
	)
    t215_written_level = models.PositiveSmallIntegerField(null=True, blank=True)
    t215_reading_level = models.PositiveSmallIntegerField(null=True, blank=True)
    t215_speaking_level = models.PositiveSmallIntegerField(null=True, blank=True)
    t215_comprension_level = models.PositiveSmallIntegerField(null=True, blank=True)

    class Meta:
        verbose_name = 'LenguageRequired'
        verbose_name_plural = 'LenguagesRequired'
        db_table = "t215_idioma"

    def __str__(self) ->str:
	    return str(self.t215_id_lenguage)

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
    c205_id_application_state = models.ForeignKey(
		ApplicationState,
		null=True,
		blank=True,
		related_name='ApplicationStatus',
        on_delete=models.CASCADE)       
    t201_date_application = models.DateField()

    class Meta:
        verbose_name = 'Application'
        verbose_name_plural = 'Applications'
        db_table = "t201_solicitud"

    def __str__(self) ->str:
	    return str(self.t201_id_application)

#T216 Estado Solicitud
class ApplicationStateHistory(models.Model):
    t216_id_state = models.AutoField(primary_key=True)
    t201_id_application= models.ForeignKey(
		Application,
		null=True,
		blank=True,
		related_name='ApplicationRegister',
        on_delete=models.CASCADE)
    c205_id_application_state = models.ForeignKey(
		ApplicationState,
		null=True,
		blank=True,
		related_name='ApplicationStatuses',
        on_delete=models.CASCADE)
    t216_modify_date = models.DateField()        
    
    class Meta:
        verbose_name = 'ApplicationState'
        verbose_name_plural = 'ApplicationsStates'
        db_table = "t216_estado_solicitud"

    def __str__(self) ->str:
	    return str(self.t216_id_state)

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
        db_table = 't202_comunicado'

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
        db_table = 't203_reporte'

    def __str__(self) -> str:
        return self.t203_id_report    

