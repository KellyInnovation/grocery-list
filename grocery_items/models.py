from django.db import models

class GroceryItem(models.Model):
	CATEGORY_CHOICES = (
		('MEAT', 'Meat'),
		('PRODUCE', 'Produce'),
		('DAIRY', 'Dairy'),
		('BAKERY', 'Bread/Bakery'),
		('BEVERAGES', 'Beverages'),
		('CANNED', 'Canned / Jarred Goods'),
		('DRY', 'Dried Goods'),
		('BAKING', 'Baking Goods'),
		('FROZEN', 'Frozen Foods'),
		('PAPER', 'Paper Goods'),
		('PERSONAL', 'Personal Care'),
		('CLEANERS', 'Cleaners'),
		('OTHER', 'Other'),
	)

	name = models.CharField(max_length=200)
	quantity = models.IntegerField()
	price = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True, default=1.00)
	created = models.DateTimeField(auto_now_add=True)
	categories = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='Other', null=True, blank=True)
	checked = models.BooleanField(default=False)

	def __str__(self):
		return self.name
