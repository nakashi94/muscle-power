from django.db import models


class Fooddata(models.Model):
    food_number = models.CharField(primary_key=True, max_length=5)
    food_name = models.TextField()
    kcal = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    water = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    protein = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    fat = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    carbo = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    ile = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    leu = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    lys = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    met = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cys = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    phe = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    tyr = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    thr = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    trp = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    val = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    his = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    arg = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    asp = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    glu = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    gly = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    pro = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    ser = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    hyp = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fooddata'
