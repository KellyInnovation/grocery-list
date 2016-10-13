# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery_items', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='groceryitem',
            name='categories',
            field=models.CharField(default='Other', blank=True, max_length=1, choices=[('MEAT', 'Meat'), ('PRODUCE', 'Produce'), ('DAIRY', 'Dairy'), ('BAKERY', 'Bread/Bakery'), ('BEVERAGES', 'Beverages'), ('CANNED', 'Canned / Jarred Goods'), ('BAKING', 'Baking Goods'), ('FROZEN', 'Frozen Foods'), ('PAPER', 'Paper Goods'), ('PERSONAL', 'Personal Care'), ('CLEANERS', 'Cleaners'), ('OTHER', 'Other')], null=True),
        ),
    ]
