# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.renderers import JSONRenderer
# from rest_framework.authentication import get_autorization_header
# from apps.users.authentication import ExpiringTokenAuthentication

# class Authentication(object):
#   user = None
#   user_token_expired = False
#   def get_user(self, request):
#     token = get_autorization_header(request).split()
#     if token:
#       try:
#         token = token[1].decode() # recuperamos el token
#       except:
#         return None
#       token_expire = ExpiringTokenAuthentication()
#       user, token, message, self.user_token_expired = token_expire.authenticate_credentials(token)
      
#       if user != None and token != None:
#         self.user = user
#         return user
#       return message
#     return None

#   def dispatch(self, request, *args, **kwars):
#     user = self.get_user(request)
#     if user is not None:
#       if type(user) == str:
#         response = Response({'error': user, 'expired': self.user_token_expired}, status=status.HTTP._401_UNAUTHORIZED)
#         response.accepted_renderer = JSONRenderer()
#         response.accepted_media_type = 'application/json'
#         response.renderer_contect = {}
#         return response
#       if not self.user_token_expired:
#         return super().dispathc(request, *args, ** kwars)
#     response = Response({'error': 'No se han enviado las credenciales', 'expired': self.user_token_expired}, stataus=status.HTTP_200_OK)
#     response.accepted_renderer = JSONRenderer()
#     response.accepted_media_type = 'application/json'
#     response.renderer_contect = {}
#     return response