from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from apps.users.api.serializers import UserSerializer, UserListSerializer
from apps.users.models import User


@api_view(['GET', 'POST'])
def user_api_view(request):
  if request.method == 'GET':
    users = User.objects.all().values('id', 'username', 'email', 'password', 'role')
    users_serializer = UserListSerializer(users, many=True)
    return Response(users_serializer.data, status=status.HTTP_200_OK)

  elif request.method == 'POST':
    user_serializer = UserSerializer(data=request.data)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response({'message': 'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)
    return Response(user_serializer.errors, status=status.HTTP_200_OK)


@api_view(['GET',  'PUT', 'DELETE'])
def user_detail_api_view(request, pk):
    user = User.objects.filter(id=pk).first()   # queryset
    if user:  # si el usuario existe
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            user_serializer = UserSerializer(user, data=request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data, status=status.HTTP_200_OK)
            return Response(user_serializer.errors, status=status.HTTP_200_OK)

        elif request.method == "DELETE":
            user = User.objects.filter(id=pk).first()
            user.delete()
            return Response({'message': 'Cuenta eliminada'}, status=status.HTTP_200_OK)
    return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_200_OK)
