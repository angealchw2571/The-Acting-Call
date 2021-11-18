from django.urls import path, include
#-------------------------------------------------------------
# rest_framework related.
#-------------------------------------------------------------
# This import is for Class based view.
from profiles.api.views import ProfilesAV, ProfilesDetailAV
#-------------------------------------------------------------


urlpatterns = [
    path('', ProfilesAV.as_view(), name='profiles'),
    path('<int:pk>/', ProfilesDetailAV.as_view(), name='profiles-details')
   
]