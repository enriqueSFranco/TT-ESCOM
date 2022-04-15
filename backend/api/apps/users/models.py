from pyexpat import model
from django.db import models
from django.utils import timezone
# from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager

class Rol(models.Model):
    """Define el rol para un usuario"""
    id = models.AutoField(primary_key=True)
    rol = models.CharField('Rol', max_length=50, unique=True)

    def __str__(self):
        return self.rol

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractUser, PermissionsMixin):
    is_student = models.BooleanField(default=False)
    is_recruiter = models.BooleanField(default=False)
    is_moderator = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    #objects = CustomAccountManager()
    class Meta:
        db_table = 'usuarios'

    def __str__(self):
        return "Funciona.... creo"

# from django.db import models
# from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
# from simple_history.models import HistoricalRecords


# class UserManager(BaseUserManager):
# 	def _create_user(self, username, email, name, last_name, password, is_staff, is_superuser, **extra_fields):
# 		user = self.model(
# 			username=username,
# 			email=email,
# 			name=name,
# 			last_name=last_name,
# 			is_staff=is_staff,
# 			is_superuser=is_superuser,
# 			**extra_fields
# 		)
# 		user.set_password(password)
# 		user.save(using=self.db)
# 		return user

# 	def create_user(self, username, email, name, last_name, password=None, **extra_fields):
# 		return self._create_user(username, email, name, last_name, password, False, False, **extra_fields)

# 	def create_superuser(self, username, email, name, last_name, password=None, **extra_fields):
# 		return self._create_user(username, email, name, last_name, password, True, True, **extra_fields)

# # MODELO PARA UN USUARIO GENERAL
# class User (AbstractBaseUser, PermissionsMixin):

# 	ROLE_CHOICES = (
# 		('administrador', 'Administrador'),
# 		('reclutador', 'Reclutador'),
# 		('alumno', 'Alumno'),
# 	)

# 	username = models.CharField(max_length=255, unique=True)
# 	email = models.EmailField('Correo Electrónico', max_length=255, unique=True,)
# 	name = models.CharField('Nombres', max_length=255, blank=True, null=True)
# 	last_name = models.CharField('Apellidos', max_length=255, blank=True, null=True)
# 	image = models.ImageField('Imagen de perfil', upload_to='perfil/', max_length=255, null=True, blank=True)
# 	is_active = models.BooleanField(default=True)
# 	is_staff = models.BooleanField(default=True)
# 	role = models.CharField(max_length=50, choices=ROLE_CHOICES)
# 	historical = HistoricalRecords()

# 	class Meta:
# 		verbose_name = 'Usuario'
# 		verbose_name_plural = 'Usuarios'

# 	USERNAME_FIELD = 'username'
# 	REQUIRED_FIELDS = ['email', 'name', 'last_name']

# 	def __str__(self):
# 		return f'{self.name} {self.last_name}'
