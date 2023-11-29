from django.urls import path

from . import views

urlpatterns = [

    path('querystate/', views.get_state_data)

]