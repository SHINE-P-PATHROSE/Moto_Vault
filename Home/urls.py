from django.urls import path
from . import views

urlpatterns = [
    path('Home/', views.home, name='home'),
    path('', views.login_page, name='login_page'),
    path('signup/', views.signup_page, name='signup_page'),
    path('logout/', views.logout_view, name='logout'),
]