# Generated by Django 3.2.3 on 2021-05-31 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_product_ingredients'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='ingredients',
            field=models.TextField(default='awesome', max_length=500),
        ),
    ]