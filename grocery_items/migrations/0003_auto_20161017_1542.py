# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery_items', '0002_groceryitem_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='groceryitem',
            name='checked',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='groceryitem',
            name='categories',
            field=models.CharField(choices=[('MEAT', 'Meat'), ('PRODUCE', 'Produce'), ('DAIRY', 'Dairy'), ('BAKERY', 'Bread/Bakery'), ('BEVERAGES', 'Beverages'), ('CANNED', 'Canned / Jarred Goods'), ('DRY', 'Dried Goods'), ('BAKING', 'Baking Goods'), ('FROZEN', 'Frozen Foods'), ('PAPER', 'Paper Goods'), ('PERSONAL', 'Personal Care'), ('CLEANERS', 'Cleaners'), ('OTHER', 'Other')], default='Other', null=True, blank=True, max_length=1),
        ),
    ]
