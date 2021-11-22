from rest_framework import permissions


class ReviewUserOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            #Check permision for read only request
            return True
        else:
            # Check permisson for write request
            print("object id is: ", obj.accountLinked_id)
            print("object id TYPE is: ", type(obj.accountLinked_id))
            print("USER id TYPE is: ", type(request.user.id))
            return obj.accountLinked_id == request.user.id