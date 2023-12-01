from django.urls import path

from . import views

urlpatterns = [

    path('querystate/', views.get_state_data), #http://127.0.0.1:8000/getState/querystate/
    path('startcrawl/', views.start_crawler) #http://127.0.0.1:8000/getState/startcrawl/

]