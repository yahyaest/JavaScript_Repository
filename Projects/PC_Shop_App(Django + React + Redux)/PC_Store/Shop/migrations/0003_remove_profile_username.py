# Generated by Django 3.1 on 2020-10-30 15:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0002_auto_20201030_1650'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='username',
        ),
    ]