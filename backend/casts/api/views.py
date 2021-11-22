#-----------------------------------------------------
# rest_frameworks
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#-----------------------------------------------------
# local files import - Serializers
from casts.api.serializers import CastCallSerializer
#-----------------------------------------------------
# local files import - Models
from casts.models import Castcall




class CastCallAV(APIView):

    def get(self, request):
        print("Request user: ", request.user)
        print("Request ID: ", request.user.id)
        castcall = Castcall.objects.all()
        serializer = CastCallSerializer(castcall, many=True)
        return Response(serializer.data)

    def post(self,request):
        print("Request user: ", request.user)
        print("Request ID: ", request.user.id)
        serializer = CastCallSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


            

class CastCallDetailAV(APIView):

    def get(self, request, pk):
        print("Request user: ", request.user)
        print("Request ID: ", request.user.id)
        try:
            castcall = Castcall.objects.get(pk=pk)
        except Castcall.DoesNotExist:
            return Response({'No such cast call'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CastCallSerializer(castcall)
        return Response(serializer.data)

    def put(self,request,pk):
        print("Request user: ", request.user)
        print("Request ID: ", request.user.id)
        castcall = Castcall.objects.get(pk=pk)
        serializer = CastCallSerializer(castcall, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        print("Request user: ", request.user)
        print("Request ID: ", request.user.id)
        castcall = Castcall.objects.get(pk=pk)
        castcall.delete()
        # return in form of status code
        return Response(status=status.HTTP_204_NO_CONTENT)