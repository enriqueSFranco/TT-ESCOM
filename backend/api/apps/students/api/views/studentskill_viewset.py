from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from apps.students.models import StudentSkill

from apps.students.api.serializer.studentskill_serializer import SkillListSerializer, SkillSerializer

class SkillViewSet(viewsets.GenericViewSet):
  serializer_class=SkillSerializer
  serializer_list_class=SkillListSerializer
  queryset=None

  def get_object(self, pk):
    return get_object_or_404(self.model, pk=pk)

  def get_queryset(self):
    if self.queryset is None:
      self.queryset=StudentSkill.objects.values()
    return self.queryset

  def list(self, request):
    skills=self.get_queryset()
    print(skills)
    skills_serializer=self.serializer_list_class(skills, many=True)
    return Response(skills_serializer.data, status=status.HTTP_200_OK)
  
  def create(self, request):
    skill_serializer=self.serializer_class(data=request.data)
    if skill_serializer.is_valid():
      skill_serializer.save()
      return Response({"message": "Habilidad creada correctamente"}, status=status.HTTP_200_OK)
    return Response({"message": "Hay errores en el registro"}, status=status.HTTP_400_BAD_REQUEST)