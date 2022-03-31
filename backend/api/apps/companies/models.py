from django.db import models
from apps.administration.models import Admin

def upload_image_banner(instance, filename):
    return f"{instance.t300_id_company}-{filename}"

def upload_image_logo(instance, filename):
    return f"{instance.t300_id_company}-{filename}"

class Company(models.Model):
    t300_id_company = models.AutoField(primary_key=True)
    t300_name = models.CharField(max_length=100,blank=False,null=False,default="Sin")
    t300_rfc = models.CharField(max_length=20,blank=False,null=False,default="Sin")
    t300_nss = models.PositiveIntegerField()
    t300_email =  models.EmailField(null=True,blank=True)
    t300_bussiness_name = models.CharField(max_length=100,blank=True,null=True)
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
    t300_create_date = models.DateField()

    class Meta:
        unique_together = ['t300_rfc','t300_nss','t300_email']
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
        db_table = 't300_empresa'
    
    def __str__(self) -> str:
        return self.t300_name

class Ubication(models.Model):
    estados=[
		('AGUASCALIENTES','AGUASCALIENTES'),
		('BAJA CALIFORNIA','BAJA CALIFORNIA'),
		('BAJA CALIFORNIA SUR','BAJA CALIFORNIA SUR'),
		('CAMPECHE','CAMPECHE'),
		('COAHUILA','COAHUILA'),
		('COLIMA','COLIMA'),
		('CHIAPAS','CHIAPAS'),
		('CHIHUAHUA','CHIHUAHUA'),
		('CIUDAD DE MEXICO','CIUDAD DE MEXICO'),
		('DURANGO','DURANGO'),
		('GUANAJUATO','GUANAJUATO'),
		('GUERRERO','GUERRERO'),
		('HIDALGO','HIDALGO'),
		('JALISCO','JALISCO'),
		('MEXICO','MEXICO'),
		('MICHOACAN','MICHOACAN'),
		('MORELOS','MORELOS'),
		('NAYARIT','NAYARIT'),
		('NUEVO LEON','NUEVO LEON'),
		('OAXACA','OAXACA'),
		('PUEBLA','PUEBLA'),
		('QUERETARO DE ARTEAGA','QUERETARO DE ARTEAGA'),
		('QUINTANA ROO','QUINTANA ROO'),
		('SAN LUIS POTOSI','SAN LUIS POTOSI'),
		('SINALOA','SINALOA'),
		('SONORA','SONORA'),
		('TABASCO','TABASCO'),
		('TAMAULIPAS' ,'TAMAULIPAS'),
		('TLAXCALA' ,'TLAXCALA'),
		('VERACRUZ' ,'VERACRUZ '),
		('YUCATAN' ,'YUCATAN'),
		('ZACATECAS' ,'ZACATECAS'),
		('NO ESPECIFICADA' ,'NO ESPECIFICADA')
	]
    t300_id_company = models.ForeignKey(
		Company,
		null=False,
		blank=False,
		related_name='CompanyUbication',
		on_delete=models.CASCADE)
    t302_state = models.CharField(max_length=50,choices=estados,default='NO ESPECIFICADA',null=True,blank=True)
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
        return super().__str__()

class Recruiter(models.Model):
    t301_id_recruiter = models.AutoField(primary_key=True)
    t301_name = models.CharField(max_length=60,null=True,blank=True)
    t301_last_name = models.CharField(max_length=100,null=True,blank=True)
    t301_user = models.CharField(max_length=60,null=True,blank=True)
    t300_id_company = models.ForeignKey(
        Company,
        null=False,
        blank=False,
        related_name='RecuiterCompany',
        on_delete=models.CASCADE)
    t301_password = models.CharField(max_length=100,null=True,blank=True)

    class Meta:
        verbose_name = 'Recruiter'
        verbose_name_plural = 'Recruiters'
        db_table = 't301_reclutadores'

    def __str__(self) -> str:
        return self.t301_name+' '+self.t301_last_name