# Generated by Django 3.2.3 on 2021-05-31 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_alter_product_ingredient'),
    ]

    operations = [
        migrations.AddField(
            model_name='ingredient',
            name='slug',
            field=models.SlugField(default='new'),
        ),
        migrations.AlterField(
            model_name='ingredient',
            name='description',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
