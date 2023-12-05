from django.shortcuts import render
import django.db.utils
from django.http import HttpResponse, JsonResponse
from .models import State_Data
from bs4 import BeautifulSoup
import requests as req
from urllib.parse import urlparse
# Create your views here.
STATE_HTML = "https://simple.wikipedia.org/wiki/List_of_U.S._states"
def get_state_data(req):
    #one string with each field seperated by a space then in javascript we splits tring by " "
    #url_request = req.GET['name'] 
    

    state_obj = State_Data.objects.all()


    return JsonResponse([state.serialize() for state in state_obj], safe=False)
    

  
def start_crawler(request):
    #will throw an error if database is already populated with states because of duplicate keys
    try:
    # if (State_Data.objects.exists()):
    #     return HttpResponse("SQL data already exists, no recrawling needed") 
        state_doc = BeautifulSoup(req.get(STATE_HTML).text ,'html.parser')
        table = state_doc.find('table',class_= "wikitable sortable plainrowheaders")
        table_rows = table.find("tbody").find_all("tr")
        
        for curr_ind, current_row in enumerate(table_rows[2:]): #iteating thru all tr
            state_dict = {}
            #table_rows[i] = Tag class
            #print(table_rows[i])
            #cells[0].get_text()
            cells = current_row.find_all(['td', 'th'])
            row_contents = []
            column_headers = []
            second_headers = []
            #NOT DONE EXTRACT ALL HEADERS FORM FIRST 2 ROWS--------------------------
            ind = 0 
            #print(current_row)
            #print()
            while ind < len(cells):
                #crawl abbreviation instead to match with current state being hovered
                entry = cells[ind]
                #print() #RIGHT NOW we might want to extract all children
                #row_contents.append(entry.contents)
                # print(entry)
                #150px
                #flag
                if (ind == 0):#flag
                    flag_slug = entry.findChild("img").get("src")
                    state_dict["flag"] = flag_slug
                    #150px
                    # print(flag_slug)
                elif(ind == 1): #name 
                    alpha2 = entry.getText(strip = True)
                    # print(alpha2)
                    
                    state_dict["name"] = alpha2
                elif (ind == 2): #largest city or capital
                    #print(entry)
                    contingent = cells[ind+1].getText(strip = True)
                    cap = entry.findChild("a").getText(strip = True)
                    #print(cap)
                    #print(contingent)]

                    #database city is written in est date if it has two cities
                    #los angeles ; sacramento ; dec 14 2014
                    state_dict["capital"] = cap  
                    # if state_dict["name"] == "NY":
                    #     print("should be nyc : ", contingent.replace(" ", "").isalpha())
                    #     break
                    if (contingent.replace(" ", "").isalpha()): 
                        #print("in if statement:")
                        #print(ind)
                       #print("length",len(cells))
                        del cells[ind +1 ]
                        
                        state_dict["largest_city"] = contingent
                        #print(state_dict["largest_city"])
                        
                    else:
                        state_dict["largest_city"] = cap
                        #print("states where cap is also largest city: ", state_dict["name"])

                elif (ind == 3 ): #date
                    est = entry.getText(strip = True)
                    #print(est)
                    state_dict["est_date"] = est
                    #print(state_dict)

                
                elif ind == 4:#population
                    p = entry.getText(strip = True)
                    #print(p)
                    state_dict["pop"] = p
                    
                #mi^2
                elif ind == 5:#total_area
                    tot_area = entry.getText(strip = True)
                    state_dict["total_area"] = tot_area

                elif ind == 7:#land area
                    l_area = entry.getText(strip = True)
                    state_dict["land_area"] = l_area
                    
                elif ind == 9 : #water area
                    w_area = entry.getText(strip = True)
                    state_dict["water_area"] = w_area
                # print(w_area)

                elif ind == 11: #numreps
                    numrep = entry.getText(strip = True)

                    state_dict["numrep"] = numrep
                    #print("L2: ",len(cells))

                    #put into database and were done!  

                    state_create_row = State_Data.objects.create(
                    name = state_dict["name"],
                    capital = state_dict["capital"],
                    largest_city = state_dict["largest_city"],
                    est_date = state_dict["est_date"],
                    pop =  state_dict["pop"],
                    total_area = state_dict["total_area"],
                    land_area = state_dict["land_area"] , 
                    water_area = state_dict["water_area"], 
                    numrep = state_dict["numrep"] ,

                    flag = state_dict["flag"]
                    )



                ind += 1



                
            #----------------------------------------------------------------------------

            print()



        #all_rows = [t for t in table.find_all('tr')]
        #print(all_rows)
    except django.db.utils.IntegrityError as e:
        return HttpResponse(f"Crawling resulted in an error when updating SQL, Possibly due to duplicate primary keys: {e}")



    return HttpResponse("SQL data has been updated")