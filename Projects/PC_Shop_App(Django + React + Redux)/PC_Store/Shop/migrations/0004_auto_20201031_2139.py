# Generated by Django 3.1 on 2020-10-31 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0003_remove_profile_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='data',
            field=models.JSONField(default={'chart': [], 'favourites': []}),
        ),
    ]