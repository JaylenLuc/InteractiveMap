from django.db import models
import uuid
# Create your models here.
class State_Data(models.Model):
    #data fields 
    name = models.CharField(max_length=30, primary_key = True)
    capital = models.CharField(max_length=30)
    largest_city = models.CharField(max_length=30)
    est_date = models.CharField(max_length=30)
    pop =  models.CharField(max_length=30)
    total_area = models.CharField(max_length=30) #km^2
    land_area = models.CharField(max_length=30) #km^2
    water_area = models.CharField(max_length=30) #km^2
    numrep = models.CharField(max_length=30) 

    flag = models.SlugField(max_length=200, unique = True)

    def __str__(self):
        return self.name

    def serialize(self):
        #"name" = self.name
        return {
            "name" : self.name,
            "capital" : self.capital,
            "largest_city" : self.largest_city,
            "est_date" : self.est_date,
            "pop" :  self.pop,
            "total_area" : self.total_area,
            "land_area" : self.land_area,
            "water_area" : self.water_area,
            "numrep" : self.numrep,
            "flag" : self.flag
        }

    class Meta:
        ordering = ["name"]