from rest_framework import serializers
from apps.users.models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    #email = serializers.EmailField(required=True)
    #user_name = serializers.CharField(required=True)
    #password = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = User
        fields = ('password','is_superuser','username','first_name','last_name','email','is_staff','user_type','is_active','user_id')

    def create(self, validate_data):
        new_user = User(**validate_data)
        new_user.set_password(validate_data['password']) 
        print(new_user)
        # generar token de autenticacion
        new_user.save() # guardamos al usuario
        return new_user
    
    def validate_username(self,value):
      # custom validation
      print ("Validando correo")
      if value == '':
        raise serializers.ValidationError("El campo correo esta vacio")
      if User.objects.filter(username=value):
        raise serializers.ValidationError("Ya hay un usuario registrado con ese correo")
      return value

    def validate_email(self,value):
      # custom validation
      print ("Validando correo")
      if value == '':
        raise serializers.ValidationError("El campo correo esta vacio")
      if User.objects.filter(email=value):
        raise serializers.ValidationError("Ya hay un usuario registrado con ese correo")
      return value

    def validate_password(self,value):
      # custom validation
      print ("Validando correo")
      if value == '':
        raise serializers.ValidationError("El campo contraseña esta vacio")
      
      return value

class ListUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    #email = serializers.EmailField(required=True)
    #user_name = serializers.CharField(required=True)
    #password = serializers.CharField(min_length=8, write_only=True)
    class Meta:
        model = User
        fields = '__all__'



class UpdateUserSerializer(serializers.ModelSerializer):
  # skills=SkillSerializer(many=True)
  class Meta:
    model = User
    fields = ('first_name','last_name')
      # encriptamos el password cuando el usuario quiera actualizar su informacion
    def update(self, instance, validate_data):
      update_user = super().update(instance, validate_data)
      #update_student.set_password(validate_data['password'])
      update_user.save()
      return update_user

class PasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=128, min_length=6, write_only=True)
  password2 = serializers.CharField(max_length=128, min_length=6, write_only=True)

  def validate(self, data):
    if data['password'] != data['password2']:
      raise serializers.ValidationError(
        {'password': 'Debe ingresar ambas contraseñas iguales'}
      )
    return data
    #def create(self, validated_data):
    #    password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
    #    instance = self.Meta.model(**validated_data)
    #    if password is not None:
    #        instance.set_password(password)
    #    instance.save()
    #    return  