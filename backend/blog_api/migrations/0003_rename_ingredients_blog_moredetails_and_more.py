# Generated by Django 4.1.3 on 2022-11-08 09:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_api', '0002_category_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='ingredients',
            new_name='moreDetails',
        ),
        migrations.RenameField(
            model_name='blog',
            old_name='excerpt',
            new_name='price',
        ),
    ]
