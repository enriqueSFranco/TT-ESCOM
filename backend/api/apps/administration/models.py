from django.db import models
from apps.users.models import User


"""----------------------------------------------------------- Catalogos --------------------------------------------------------"""

#C401 Rol del encargado
class Rol(models.Model):
	c401_id_rol = models.AutoField(primary_key=True)
	c401_description = models.CharField(max_length=60,blank=True,null=True)

	class Meta:
		verbose_name = 'Rol'
		db_table = 'c401_rol'
	
	def __str__(self) -> str:
		return self.c401_description

"""------------------------------------------------ Tablas de información -------------------------------------------------------"""
class Admin(models.Model):
    id_user = models.OneToOneField(User,on_delete=models.CASCADE,null=False,blank=False)
    t400_id_admin = models.AutoField(primary_key=True)
    t400_name = models.CharField(max_length=60,blank=True,null=True)
    t400_last_name = models.CharField(max_length=70, blank=True,null=True)
    t400_second_surname = models.CharField(max_length=70, blank=True,null=True)
    t400_email = models.EmailField(null=False,blank=False,default="")    
    t400_position = models.CharField(max_length=60,blank=True,null=True,default="No definido")
    c401_id_rol = models.ForeignKey(
        Rol,
        null=True,
		blank=True,
        default=1,
        related_name='ManagerRol',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Admin'
        verbose_name_plural = 'Admins'
        db_table = 't400_administrador'

    def __str__(self) -> str:
        return self.t400_email