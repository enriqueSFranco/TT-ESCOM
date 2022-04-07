from queue import Empty
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from apps.students.models import StudentSkill,Skills

from apps.students.api.serializer.studentskill_serializer import SkillListSerializer, SkillSerializer,UpdateStudentSkillSerializer

class SkillViewSet(viewsets.GenericViewSet):
  model = StudentSkill
  serializer_class=SkillSerializer
  serializer_list_class=SkillListSerializer
  queryset=None

  def get_object(self, pk):
    self.queryset = self.model.objects\
			.filter(t100_boleta=pk)\
			.values('t100_boleta','c116_id_skill','t102_id_registrer')
    return self.queryset

  def get_queryset(self):
    if self.queryset is None:
      self.queryset = self.model.objects\
			  .filter()\
			  .all()#values('t100_boleta','c116_id_skill','t102_id_registrer')
    return self.queryset

  def list(self, request):
    skills=self.get_queryset()
    print(skills)
    skills_serializer=self.serializer_list_class(skills, many=True)
    return Response(skills_serializer.data, status=status.HTTP_200_OK)
  
  def create(self, request):
    print(request.data)
<<<<<<< HEAD
=======
    #if request.data['c116_id_skill']

>>>>>>> e49af52f42f1184d8936ac5fc668a08126052795
    skill_serializer=self.serializer_class(data=request.data)    
    if skill_serializer.is_valid():
      skill_serializer.save()
      return Response({"message": "Habilidad creada correctamente"}, status=status.HTTP_200_OK)
    return Response({"message": "Hay errores en el registro"}, status=status.HTTP_400_BAD_REQUEST)

  def retrieve(self, request, pk):        
    skills = self.model.objects.filter(t100_boleta=pk).all()
    skills_serializer = self.serializer_list_class(skills,many=True)
    return Response(skills_serializer.data)

  def update(self, request, pk):
    skill = self.model.objects.filter(t102_id_registrer=pk).first()
    skill_serializer = UpdateStudentSkillSerializer(skill, data=request.data)
    if skill_serializer.is_valid():
      skill_serializer.save()
      return Response({
				'message': 'Registro de idioma actualizado correctamente'
			}, status=status.HTTP_200_OK)
    return Response({
			'message': 'Hay errores en la actualización',
			'errors': skill_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

  def destroy(self, request, pk):
    skill_destroy = self.model.objects.filter(t102_id_registrer=pk).first()    
    if skill_destroy:
      skill_destroy = self.model.objects.filter(t102_id_registrer=pk).delete()
      return Response({
				'message': 'Habilidades del alumno eliminado correctamente'
			})
    return Response({
			'message': 'No existe habilidad del alumno que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)

    