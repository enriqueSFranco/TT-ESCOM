# Generated by Django 4.0.2 on 2022-03-03 02:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='skill',
            table='skill',
        ),
        migrations.AlterModelTable(
            name='student',
            table='student',
        ),
    ]
