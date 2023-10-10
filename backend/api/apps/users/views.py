from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.users.api.serializers import UserSerializer,ListUserSerializer,UpdateUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from apps.students.models import Student
from apps.companies.models import Recruiter
from apps.administration.models import Admin
from apps.users.models import User


class UserCreate(viewsets.GenericViewSet):
    permission_classes = [AllowAny]

    def create(self, request):
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
    student_model = Student
    recruiter_model = Recruiter
    admin_model = Admin
    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self,attrs):		
        data = super().validate(attrs)
        token = self.get_token(self.user)     
        print(self.user.id)#-------------Depurar
        data['refresh']=str(token)
        data['access']=str(token.access_token)		
        print(self.user.user_type)#-------------Depurar
        if(self.user.user_type=='STUDENT'):
            student_data = self.student_model.objects.filter(id_user = self.user.id).values('t100_id_student')
            id=student_data[0]['t100_id_student']
            print(student_data[0]['t100_id_student'])#-------------Depurargit
        elif(self.user.user_type=='RECRUITER'):
            recruiter_data = self.recruiter_model.objects.filter(id_user = self.user.id).values('t301_id_recruiter')
            id = recruiter_data[0]['t301_id_recruiter']
            print(recruiter_data[0]['t301_id_recruiter'])#-------------Depurargit
        elif(self.user.user_type=='MANAGER'):
            admin_data = self.admin_model.objects.filter(id_user = self.user.id).values('t400_id_admin')
            id = self.user.id
            self.user.id = admin_data[0]['t400_id_admin']			
            print(admin_data[0]['t400_id_admin'])#-------------Depurargit
        user={
			'id':self.user.id,
			'user_id':id,			
			'username':self.user.username,
			'email':self.user.email,#---------->Quitar cuando se cambie la forma de validar si entrar al step o no
			'user_type':self.user.user_type,
			'first_name':self.user.first_name#---------->Quitar cuando se cambie la forma de validar si entrar al step o no
		}
        data['user']=user        
        print (data)

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
