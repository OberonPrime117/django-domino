# Generated by Django 3.2.3 on 2021-05-31 11:23

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0011_alter_product_ingredients'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='allergens',
            field=tinymce.models.HTMLField(default='awesome', max_length=3500),
        ),
        migrations.AlterField(
            model_name='product',
            name='ingredients',
            field=tinymce.models.HTMLField(default='awesome', max_length=3500),
        ),
    ]