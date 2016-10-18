# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery_items', '0003_auto_20161017_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='categories',
            field=models.CharField(blank=True, choices=[('MEAT', 'Meat'), ('PRODUCE', 'Produce'), ('DAIRY', 'Dairy'), ('BAKERY', 'Bread/Bakery'), ('BEVERAGES', 'Beverages'), ('CANNED', 'Canned / Jarred Goods'), ('DRY', 'Dried Goods'), ('BAKING', 'Baking Goods'), ('FROZEN', 'Frozen Foods'), ('PAPER', 'Paper Goods'), ('PERSONAL', 'Personal Care'), ('CLEANERS', 'Cleaners'), ('OTHER', 'Other')], max_length=100, null=True, default='Other'),
        ),
    ]
