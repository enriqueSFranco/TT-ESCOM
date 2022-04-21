from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from apps.students.api.serializer.student_serializer import StudentTokenSerializer
from apps.users.api.serializers import UserSerializer


class Login(ObtainAuthToken):

  def post(self,request,*args,**kwargs):
    login_serializer = self.serializer_class(data = request.data, context = {'request':request})    
    #print(login_serializer)
    #print(request.user)
    #print(request.data)
    if login_serializer.is_valid():
      #print("Paso la validación")
      #print(login_serializer.validated_data)
      user= login_serializer.validated_data['user']      
      if user.is_active:
        #print("Puede iniciar sesión")
        token,created = Token.objects.get_or_create(user = user)     
        user_serializer = UserSerializer(user)    
        if created:
            return Response({'token':token.key,
                             'user':user_serializer.data,
                             'message':'Inicio de sesión exitoso'},
                  status.HTTP_201_CREATED)
        else:
          token.delete()
          token=Token.objects.create(user = user)
          return Response({'token':token.key,
                             'user':user_serializer.data,
                             'message':'Inicio de sesión exitoso'},
                  status.HTTP_201_CREATED)
      else :
        #print("No puede iniciar sesión")
        return Response({'message':'Este usuario no puede iniciar sesión',
                         'error':'Usuario inactivo'}
                         ,status = status.HTTP_401_UNAUTHORIZED)
    else:
      #print("No paso validación")
      return Response({'error':'Nombre de usuario o contraseña incorrecta'},status = status.HTTP_400_BAD_REQUEST)    


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

