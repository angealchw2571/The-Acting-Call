from django.urls import path, include
#-------------------------------------------------------------
# rest_framework related.
#-------------------------------------------------------------
# This import is for Class based view.
from casts.api.views import CastCallAV, CastCallDetailAV
#-------------------------------------------------------------


urlpatterns = [
    path('', CastCallAV.as_view(), name='allcasts'),
    path('<int:pk>/', CastCallDetailAV.as_view(), name='allcasts-detail')

]
