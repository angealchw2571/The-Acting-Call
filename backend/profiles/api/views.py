#-----------------------------------------------------
# rest_frameworks
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status
#-----------------------------------------------------
# local files import - Serializers
from profiles.api.serializers import ProfilesSerializer
#-----------------------------------------------------
# local files import - Models
from profiles.models import Profiles



class ProfilesAV(APIView):

    def get(self, request):
        profiles = Profiles.objects.all()
        serializer = ProfilesSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ProfilesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

            

class ProfilesDetailAV(APIView):

    def get(self, request, pk):
        try:
            profiles = Profiles.objects.get(pk=pk)
        except Profiles.DoesNotExist:
            return Response({'No such User Found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfilesSerializer(profiles)
        return Response(serializer.data)

    def put(self,request,pk):
        profiles = Profiles.objects.get(pk=pk)
        serializer = ProfilesSerializer(profiles, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        castcall = Profiles.objects.get(pk=pk)
        castcall.delete()
        # return in form of status code
        return Response(status=status.HTTP_204_NO_CONTENT)
    
