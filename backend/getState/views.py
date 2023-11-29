from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def get_state_data(req):
    return HttpResponse('Received')