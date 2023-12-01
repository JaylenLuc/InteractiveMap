import factory

from getState.models import State_Data

class StateFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = State_Data
    
    name = "teststate"
    capital = "pyongyang"
    largest_city = "bts"
    est_date = "1946"
    pop =  "1321342"
    total_area = "21321"#km^2
    land_area = "9831" #km^2
    water_are = "321321" #km^2
    numrep = "213213"
    flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1920px-Flag_of_North_Korea.svg.png"