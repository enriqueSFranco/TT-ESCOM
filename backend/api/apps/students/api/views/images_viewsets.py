from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
import base64 
from apps.students.models import Student
from apps.students.api.serializer.images_serializer import StudentImageSerializer,CVSerializer

class StudentImageViewSet(viewsets.GenericViewSet):
	model = Student
	serializer_class = StudentImageSerializer	
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_id_student = pk)\
				.all()
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.all()
		return self.queryset
  

	def list(self, request):
		print(request.data)
		student_image = self.get_queryset()
		image_serializer = self.serializer_class(student_image, many=True)
		return Response(image_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		student_image = self.get_object(pk)
		image_serializer = self.serializer_class(student_image,many=True)
		return Response(image_serializer.data)
	
	def post(self,request,format=None):
		serializer = PhotoSerializer(data=request.data)
		if serializer.is_valid():
            # access the data as serializer.validated_data['keys']
            # save the MyPhoto obj lets call it myphoto
            # get the base64 string 
			imgstr64 = serializer.validated_data['corresponding filed in the serializer']
			imgdata = base64.b64decode(imgstr64)
			fname = '/tmp/%s.jpg'%(str(myphoto.id))
			with open(fname,'wb') as f:
				f.write(imgdata)
			imgname = '%s.jpg'%(str(myphoto.id))
			myphoto.image.save(imgname,File(open(fname,'r')))
			os.remove(fname)

	def update(self, request, pk):		
		print(request.data)
		#image_decode = base64.decode(request.data['data']) 
		#image_result = open('deer_decode.gif', 'wb') # create a writable image and write the decoding result
		#image_result.write(image_64_decode)
		u_image = self.model.objects.filter(t100_id_student = pk).first()
		image_serializer = self.serializer_class(u_image, data=request.data)
		if image_serializer.is_valid():
			print("Es valido :eyes:")
			imgstr64 = self.serializer_class.validated_data['t100_profile_picture']
			imgdata = base64.b64decode(imgstr64)
		#	#image_serializer.save()
		#	return Response({
		#		'message': 'Imagen de perfil actualizada correctamente'
		#	}, status=status.HTTP_200_OK)
		#return Response({
		#	'message': 'Hay errores en la actualización',
		#	'errors': image_serializer.errors
		#}, status=status.HTTP_400_BAD_REQUEST)
		return Response({
			'message': 'Aun no esta listo'
		}, status=status.HTTP_400_BAD_REQUEST)


	def destroy(self, request, pk):
		image_destroy = self.model.objects.filter(t100_id_student=pk).first()				
		if image_destroy:
			image_destroy = self.model.objects.filter(t100_id_student=pk).update(t100_profile_picture="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'Foto de perfil eliminada correctamente'
			})
		return Response({
			'message': 'No existe imagen de perfil que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)


class CVViewSet(viewsets.GenericViewSet):
	model = Student
	serializer_class = CVSerializer
	queryset = None

	def get_object(self, pk):
		self.queryset= None
		if self.queryset == None:
			self.queryset = self.model.objects\
				.filter(t100_id_student = pk)\
				.values('t100_id_student','t100_email','t100_cv')
		return  self.queryset

	def get_queryset(self):
		if self.queryset is None:
			self.queryset = self.model.objects\
				.filter()\
				.values('t100_boleta','t100_email','t100_cv')
		return self.queryset
  

	def list(self, request):
		print(request.data)
		student_cv = self.get_queryset()
		image_serializer = self.serializer_class(student_cv, many=True)
		return Response(image_serializer.data, status=status.HTTP_200_OK)
	

	def retrieve(self, request, pk):
		student_cv = self.get_object(pk)
		cv_serializer = self.serializer_class(student_cv,many=True)
		return Response(cv_serializer.data)

	def update(self, request, pk):
		print(request.data)
		u_cv = self.model.objects.filter(t100_id_student = pk).first()
		cv_serializer = self.serializer_class(u_cv, data=request.data)
		if cv_serializer.is_valid():
			cv_serializer.save()
			return Response({
				'message': 'CV actualizado correctamente'
			}, status=status.HTTP_200_OK)
		return Response({
			'message': 'Hay errores en la actualización',
			'errors': cv_serializer.errors
		}, status=status.HTTP_400_BAD_REQUEST)

	def destroy(self, request, pk):
		cv_destroy = self.model.objects.filter(t100_id_student=pk).first()				
		if cv_destroy:
			cv_destroy = self.model.objects.filter(t100_id_student=pk).update(t100_cv="")
			#Eliminar imagenes del backend
			return Response({
				'message': 'CV eliminado correctamente'
			})
		return Response({
			'message': 'No existe cv que desea eliminar'
		}, status=status.HTTP_404_NOT_FOUND)