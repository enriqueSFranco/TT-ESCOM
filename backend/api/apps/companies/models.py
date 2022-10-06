from django.db import models
from apps.administration.models import Admin
from apps.users.models import User
from drf_extra_fields.fields import Base64FileField
import PyPDF2
import io

def upload_image_banner(instance, filename):
    return f"/banners/{instance.t300_id_company}-{filename}"

def upload_image_logo(instance, filename):
    return f"logos/{instance.t300_id_company}-{filename}"

def upload_document(instance, filename):
    return f"files/company/{instance.t300_id_company}-{filename}"	

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

#C302 Estado compañia
class CompanyStatus(models.Model):
    c302_id_status = models.AutoField(primary_key=True)
    c302_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Company status'
        db_table = "c302_estado_compañia"

    def __str__(self) ->str:
	    return self.c302_description

#C303 Estado compañia
class RecruiterStatus(models.Model):
    c303_id_status = models.AutoField(primary_key=True)
    c303_description = models.TextField(max_length=50)
    
    class Meta:
        verbose_name = 'Recruiter status'
        db_table = "c302_estado_reclutador"

    def __str__(self) ->str:
	    return self.c303_description        

"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
class Company(models.Model):    
    t300_id_company = models.AutoField(primary_key=True)
    t300_name = models.CharField(max_length=100,blank=False,null=False,default="Sin datos")
    t300_rfc = models.CharField(unique=True,max_length=20,blank=False,null=False,default="Sin datos")
    t300_email =  models.EmailField(null=True,blank=True)
    t300_bussiness_name = models.CharField(max_length=100,blank=False,null=False,default="Sin datos")
    t300_web_page = models.CharField(max_length=100,blank=True,null=True,default="http://")
    t300_mision = models.TextField(blank=True,null=True)
    t300_vision = models.TextField(blank=True,null=True)
    t300_objective = models.TextField(blank=True,null=True)
    t300_logo = models.ImageField(upload_to=upload_image_logo, null=True,blank=True)
    t300_banner = models.ImageField(upload_to=upload_image_banner, null=True,blank=True)
    t300_validator_document = models.FileField(null=True, blank=True,default="",upload_to=upload_document)
    t400_id_admin = models.ForeignKey(
        Admin,
        null=True,
        blank=True,
        related_name='AdminCreate',
        on_delete=models.CASCADE
    )
    t300_verified = models.BooleanField(default=False)
    t300_create_date = models.DateField(blank=True,null=True)           
    c302_id_status = models.ForeignKey(
        CompanyStatus,
        null=True,
        blank=True,
        related_name='CompanyStatus',
        on_delete=models.CASCADE
    )

    class Meta:        
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
        db_table = 't300_empresa'
    
    def __str__(self) -> str:
        return self.t300_name

class Recruiter(models.Model):
    id_user = models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=False)
    t301_id_recruiter = models.AutoField(primary_key=True)
    t301_name = models.CharField(max_length=60,null=True,blank=True)
    t301_last_name = models.CharField(max_length=100,null=True,blank=True)
    t301_second_surname = models.CharField(max_length=100,null=True,blank=True)
    t301_user = models.CharField(max_length=60,null=True,blank=True)
    t301_email = models.EmailField(unique=True,blank=False,null=False)
    t301_phonenumber = models.PositiveBigIntegerField(blank=True,null=True)
    t300_id_company = models.ForeignKey(
        Company,
        null=False,
        blank=False,
        related_name='RecruiterCompany',
        on_delete=models.CASCADE)
    c303_id_status = models.ForeignKey(
        RecruiterStatus,
        null=True,
        blank=True,
        related_name='RecruiterStatus',
        on_delete=models.CASCADE
    )          

    class Meta:
        verbose_name = 'Recruiter'
        verbose_name_plural = 'Recruiters'
        db_table = 't301_reclutador'

    def __str__(self) -> str:
        return self.t301_email