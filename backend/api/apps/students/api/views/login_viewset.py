from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from apps.students.models import Student
from apps.users.api.serializers import CustomUserSerializer
from apps.students.api.serializer.student_serializer import StudentTokenSerializer

class Login(ObtainAuthToken):

  model = Student
  queryset = None

  def get_queryset(self,mail):
    if self.queryset is None:
      self.queryset = self.model.objects\
				.filter(t100_email=mail)\
				.values('t100_id_student','t100_boleta','t100_name','t100_last_name','t100_username','t100_cv','t100_email','t100_gender','t100_date_of_birth',
				't100_personal_objectives','t100_phonenumber','t100_residence','t100_modalities','t100_speciality','t100_target_salary','t100_travel',
				't100_profile_picture','is_active','password')
    return self.queryset
  

  def post(self,request,*args,**kwargs):
    #login_serializer = self.serializer_class(data = request.data, context = {'request':request})
    mail= request.data['t100_email']    
    print(mail)
    user = self.get_queryset(mail)
    print(user)
    login_serializer = StudentTokenSerializer(data = request.data)
    print(login_serializer)
    print(request.user)
    print(request.data)
    if user:
      print("Paso la validación")
      #print(login_serializer.validated_data)
      #user= login_serializer.validated_data['user']
      #if user.is_active:
      print("Puede iniciar sesión")
      token,created = Token.objects.get_or_create(user = user)     
      #user_serializer = CustomUserSerializer(user)    
      #  if created:
      return Response({'token':token.key,
                             #'user':user_serializer.data,
                             'message':'Inicio de sesión exitoso'},
                  status.HTTP_201_CREATED)
      #  else:
      #    token.delete()
      #    token=Token.objects.create(user = user)
      #    return Response({'token':token.key,
      #                       'user':user_serializer.data,
      #                       'message':'Inicio de sesión exitoso'},
      #            status.HTTP_201_CREATED)
     # else :
      #  print("No puede iniciar sesión")
      #  return Response({'error':'Este usuario no puede iniciar sesión'},status = status.HTTP_401_UNAUTHORIZED)
    else:
      print("No paso validación")
      return Response({'error':'Nombre de usuario o contraseña incorrecta'},status = status.HTTP_400_BAD_REQUEST)
    return Response({'mensaje':'Hola desde response'},status = status.HTTP_200_OK)


class Logout(APIView):
   
  pass

"""from datetime import datetime
from django.contrib.sessions.models import Session
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status

from apps.students.api.serializer.student_serializer import StudentTokenSerializer




class Login(ObtainAuthToken):
  permission_classes = [AllowAny]
  def post(self, request, *args, **kwargs):
    login_serializer = self.serializer_class(data=request.data, context={'request':request})
    print(login_serializer)
    if login_serializer.is_valid():
      print(login_serializer.validated_data['t100_name'])
      user = login_serializer.validated_data['t100_name']
      if user.is_active:
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = StudentTokenSerializer(user) 
        if created:
          return Response({
            'token': token.key,
            # 'user': user_serializer.data,
            'message': 'Inicio de sesion correcto',
            'authenticatedUser': {
              'email': user_serializer.data['t100_email'],
            }
          }, status=status.HTTP_201_CREATED)
        else: # si inicia sesion en otro navegador le borramos el token actual y le creamos uno nuevo
          token.delete()
          token = Token.objects.create(t100_name=user)
          return Response({
            'token': token.key,
            'user': user_serializer.data,
            'message': 'Inicio de sesion correcto'
          }, status=status.HTTP_201_CREATED)
      else:
        return Response({'error': 'Este usuario no puede inicar sesion'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
      Response({'error': 'Nombre de usuario o password incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Contraseña o nombre de usuario incorrectos', 'status':status.HTTP_400_BAD_REQUEST})"""

