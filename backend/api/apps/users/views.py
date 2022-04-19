from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.users.api.serializers import UserSerializer,ListUserSerializer,UpdateUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from apps.users.models import User


class UserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.GenericViewSet):
	model = User
	serializer_class = UserSerializer
	list_serializer_class = ListUserSerializer
	queryset = None

	def get_object(self, pk):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter(id=pk)\
				.all()
				#.values('is_superuser','username','first_name','last_name','email','is_staff','date_joined',
                #'user_type','is_active')
		return self.queryset
	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset

	def list(self, request):
		print(request.data)
		users = self.get_queryset()
		users_serializer = self.list_serializer_class(users, many=True)
		return Response(users_serializer.data, status=status.HTTP_200_OK)

	def create(self, request):        
		user_serializer = self.serializer_class(data=request.data)        
		print('request: ',request.data)
		if user_serializer.is_valid():
			user_serializer.save()
			return Response({
				'message': 'Usuario registrado correctamente.'
			}, status=status.HTTP_201_CREATED)
		return Response({
			'message': 'Hay errores en el registro',
			'errors': user_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self, request, pk):
		get_user = self.get_object(pk)
		user_serializer = self.serializer_class(get_user,many=True)
		return Response(user_serializer.data)

	def update(self, request, pk):
		get_user = self.model.objects.filter(t100_id_student=pk).first()
		user_serializer = UpdateUserSerializer(get_user, data=request.data)
		if user_serializer.is_valid():
			user_serializer.save()
			return Response({
				'message': 'Usuario actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': user_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)
#
	#def destroy(self, request, pk):
	#	student_destroy = self.model.objects.filter(t100_id_student=pk).first()
	#	if student_destroy:
	#		student_destroy = self.model.objects.filter(t100_id_student=pk).delete()
	#		return Response({
	#			'message': 'Alumno eliminado correctamente'
	#		})
	#	return Response({
	#		'message': 'No existe el alumno que desea eliminar'
	#	}, status=status.HTTP_404_NOT_FOUND)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        #token['username'] = user.username		
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer