from django.db import models
from apps.administration.models import Admin
from django.contrib.auth.models import  AbstractBaseUser
from apps.users.models import User

def upload_image_banner(instance, filename):
    return f"/banners/{instance.t300_id_company}-{filename}"

def upload_image_logo(instance, filename):
    return f"logos/{instance.t300_id_company}-{filename}"

"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
class Company(models.Model):    
    t300_id_company = models.AutoField(primary_key=True)
    t300_name = models.CharField(max_length=100,blank=False,null=False,default="Sin datos")
    t300_rfc = models.CharField(unique=True,max_length=20,blank=False,null=False,default="Sin datos")
    t300_nss = models.PositiveBigIntegerField(null=True,blank=True)
    t300_email =  models.EmailField(null=True,blank=True)
    t300_bussiness_name = models.CharField(max_length=100,blank=False,null=False,default="Sin datos")
    t300_web_page = models.CharField(max_length=100,blank=True,null=True,default="http://")
    t300_mision = models.TextField(blank=True,null=True)
    t300_vision = models.TextField(blank=True,null=True)
    t300_objective = models.TextField(blank=True,null=True)
    t300_logo = models.ImageField(upload_to=upload_image_logo, null=True,blank=True)
    t300_banner = models.ImageField(upload_to=upload_image_banner, null=True,blank=True)
    t400_id_admin = models.ForeignKey(
        Admin,
        null=True,
        blank=True,
        related_name='AdminCreate',
        on_delete=models.CASCADE
    )
    t300_verified = models.BooleanField(default=False)
    t300_create_date = models.DateField()   
    is_active = models.BooleanField(default=False) 

    class Meta:        
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
        db_table = 't300_empresa'
    
    def __str__(self) -> str:
        return self.t300_name

class OnHoldRecruiter(models.Model):#----------------------Consultar si se implementará
    name = models.CharField(max_length=60,null=True,blank=True)
    last_name = models.CharField(max_length=100,null=True,blank=True)
    email = models.EmailField(unique=True,blank=False,null=False)
    phonenumber = models.PositiveBigIntegerField(blank=True,null=True)
    id_company = models.CharField(max_length=100,null=True,blank=True)    
    

    class Meta:
        verbose_name = 'OnHoldRecruiter'
        verbose_name_plural = 'OnHoldRecruiters'
        db_table = 'reclutadores_en_espera'#------------------Cambiar nombre

    def __str__(self) -> str:
        return self.email    

class Ubication(models.Model):
    t300_id_company = models.ForeignKey(
		Company,
		null=False,
		blank=False,
		related_name='CompanyUbication',
		on_delete=models.CASCADE)
    t302_state = models.CharField(max_length=50,default='NO ESPECIFICADA',null=True,blank=True)
    t302_municipality = models.CharField(max_length=70,null=True,blank=True)
    t302_locality = models.CharField(max_length=100,null=True,blank=True)
    t302_street = models.CharField(max_length=70,null=True,blank=True)
    t302_cp = models.SmallIntegerField(null=True,blank=True)
    t302_ext = models.CharField(max_length=20,null=True,blank=True)
    t302_int = models.CharField(max_length=20,null=True,blank=True)

    class Meta:
        verbose_name = 'CompanyUbication'
        verbose_name_plural = 'CompaniesUbications'
        db_table = 't302_ubicacion'

    def __str__(self) -> str:
        return self.t300_id_company

class Recruiter(models.Model):
    id_user = models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=False)
    t301_id_recruiter = models.AutoField(primary_key=True)
    t301_name = models.CharField(max_length=60,null=True,blank=True)
    t301_last_name = models.CharField(max_length=100,null=True,blank=True)
    t301_user = models.CharField(max_length=60,null=True,blank=True)
    t301_email = models.EmailField(unique=True,blank=False,null=False)
    t301_phonenumber = models.PositiveBigIntegerField(blank=True,null=True)
    t300_id_company = models.ForeignKey(
        Company,
        null=False,
        blank=False,
        related_name='RecuiterCompany',
        on_delete=models.CASCADE)
    is_active= models.BooleanField(default=False)           

    class Meta:
        verbose_name = 'Recruiter'
        verbose_name_plural = 'Recruiters'
        db_table = 't301_reclutador'

    def __str__(self) -> str:
        return self.t301_email