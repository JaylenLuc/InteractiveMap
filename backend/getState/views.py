from django.shortcuts import render
from django.http import HttpResponse
from .models import State_Data
from bs4 import BeautifulSoup
import requests as req
# Create your views here.
STATE_HTML = "https://simple.wikipedia.org/wiki/List_of_U.S._states"
def get_state_data(req):
    #one string with each field seperated by a space then in javascript we splits tring by " "
    return HttpResponse('life is goofy')
    
def start_crawler(request):
    state_dict = {}
    state_doc = BeautifulSoup(req.get(STATE_HTML).text ,'html.parser')
    table = state_doc.find('table',class_= "wikitable sortable plainrowheaders")
    table_rows = table.find("tbody").find_all("tr")

    for i in range(len(table_rows)): #iteating thru all tr
        #table_rows[i] = Tag class
        #print(table_rows[i])

        current_row = table_rows[i]
        #cells[0].get_text()
        cells = current_row.find_all(['td', 'th'])
        row_contents = []
        column_headers = []
        second_headers = []
        #NOT DONE EXTRACT ALL HEADERS FORM FIRST 2 ROWS--------------------------
        if i < 2:
            for entry in cells:
                #crawl abbreviation instead to match with current state being hovered
                print() #RIGHT NOW we might want to extract all children
                #row_contents.append(entry.contents)
                print(entry)
            
        #----------------------------------------------------------------------------

        print()

        if i == 2:

            break

    #all_rows = [t for t in table.find_all('tr')]
    #print(all_rows)



    return HttpResponse(table)
    #put into database>
    #foo_instance = State_Data.objects.create(
    # name = models.CharField(max_length=30, primary_key = True)
    # capital = models.CharField(max_length=30)
    # largest_city = models.CharField(max_length=30)
    # est_date = models.CharField(max_length=30)
    # pop =  models.CharField(max_length=30)
    # total_area = models.CharField(max_length=30) #km^2
    # land_area = models.CharField(max_length=30) #km^2
    # water_are = models.CharField(max_length=30) #km^2
    # numrep = models.CharField(max_length=30) 

    # flag = models.SlugField(max_length=200, unique = True)
    #)