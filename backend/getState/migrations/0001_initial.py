# Generated by Django 4.2.5 on 2023-11-29 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='State_Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('capital', models.CharField(max_length=30)),
                ('largest_city', models.CharField(max_length=30)),
                ('est_date', models.CharField(max_length=30)),
                ('pop', models.CharField(max_length=30)),
                ('total_area', models.CharField(max_length=30)),
                ('land_area', models.CharField(max_length=30)),
                ('water_are', models.CharField(max_length=30)),
                ('numrep', models.CharField(max_length=30)),
                ('flag', models.SlugField(max_length=200, unique=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]