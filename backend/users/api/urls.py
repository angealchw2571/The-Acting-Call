# allows access to token, when uer and pw is sent
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from users.api.views import RegistrationViewAV, LogoutViewAV
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# register ---> register acc
# token --> issue token
# token/refresh ---> request for new token.

urlpatterns = [
    path('register/', RegistrationViewAV.as_view(), name='register'),
    path('logout/', LogoutViewAV.as_view(), name='logout'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
    
]

# path('login/', obtain_auth_token, name='login'),
