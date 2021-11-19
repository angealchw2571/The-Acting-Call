from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from users.api.serializers import RegistrationSerializer, LoginSerializer, TokenSerializer, UserSerializer
# from rest_framework.authtoken.models import Token
# from users import models
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.models import User
from django.contrib import auth
# from django.contrib.auth import authenticate, login

class LoginViewAV(APIView):

    def post(self,request):

        # serialize user input log in data
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():

            username = serializer.data['username']
            password = serializer.data['password']
            print("user input this: ",serializer.data)
            user = auth.authenticate(request, username=username,password=password)

            if user is not None:
                # backend log in according to the user details
                auth.login(request, user)
                print("You logged in!")

                # try to filter account details, from User model database
                accountdetail = User.objects.get(username=username)
                print("account detail is: ", accountdetail)

                # details obtained in QuerySet, convert to python dict.
                accountserializer = UserSerializer(data=accountdetail)
                accountserializer.is_valid()
                print(accountserializer.data)
                

                refresh = RefreshToken.for_user(user)   
                # using DRF JWT utility functions to generate a token          
                tokenserializer = TokenSerializer(data=
                    {
                        'token': {
                            'refresh': str(refresh),
                            'access': str(refresh.access_token),
                        }
                        
                    })
                tokenserializer.is_valid()
                login_response = { **serializer.data, **tokenserializer.data}
                
                return Response(login_response)  

            else: 
                return Response({'Error', 'Not User found'}, status=status.HTTP_404_NOT_FOUND)     

        else:
            return Response(serializer.errors)



class LogoutViewAV(APIView):
    def post(self, request):
        try:
            current_token = request.data['token']
            used_token = RefreshToken(current_token)
            used_token.blacklist()
            auth.logout(request)
            return Response(status=status.HTTP_200_OK)

        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)       


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
        
        else:
            # errors are dict by itself
            data = serializer.errors


        return Response(data)   


#  # JWT related
#             refresh = RefreshToken.for_user(account)

#             data['token'] = {
#                                 'refresh': str(refresh),
#                                 'access': str(refresh.access_token),
#                             }


