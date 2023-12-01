from django.db import models

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
    water_are = models.CharField(max_length=30) #km^2
    numrep = models.CharField(max_length=30) 

    flag = models.SlugField(max_length=200, unique = True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]