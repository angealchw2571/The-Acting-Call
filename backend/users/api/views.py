from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from users.api.serializers import RegistrationSerializer
from rest_framework.authtoken.models import Token
from users import models
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

        
class LogoutViewAV(APIView):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class RegistrationViewAV(APIView):

    def post(self,request):

        serializer = RegistrationSerializer(data=request.data)

        #create a new dict
        data = {}

        if serializer.is_valid():
            account = serializer.save()

         # if successful, access all the details in the account, and store it in data
            data['response'] = "Registration Successful"
            data['username'] = account.username
            data['email'] = account.email
            
            # JWT related
            refresh = RefreshToken.for_user(account)

            data['token'] = {
                                'refresh': str(refresh),
                                'access': str(refresh.access_token),
                            }
        
        else:
            # errors are dict by itself
            data = serializer.errors


        return Response(data)   