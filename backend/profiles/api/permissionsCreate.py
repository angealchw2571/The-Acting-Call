from rest_framework import permissions
from profiles.models import Profiles



class CreateUserOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            #Check permision for read only request
            return True
        else:
            # Check permisson for write request
            if request.user.id:
                return True
            else:
                return False