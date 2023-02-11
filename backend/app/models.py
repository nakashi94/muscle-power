from django.db import models


class Favorite(models.Model):
    id = models.UUIDField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    food_name = models.TextField()
    kcal = models.FloatField(blank=True, null=True)
    water = models.FloatField(blank=True, null=True)
    protein = models.FloatField(blank=True, null=True)
    fat = models.FloatField(blank=True, null=True)
    carbo = models.FloatField(blank=True, null=True)
    ile = models.FloatField(blank=True, null=True)
    leu = models.FloatField(blank=True, null=True)
    lys = models.FloatField(blank=True, null=True)
    met = models.FloatField(blank=True, null=True)
    cys = models.FloatField(blank=True, null=True)
    phe = models.FloatField(blank=True, null=True)
    tyr = models.FloatField(blank=True, null=True)
    thr = models.FloatField(blank=True, null=True)
    trp = models.FloatField(blank=True, null=True)
    val = models.FloatField(blank=True, null=True)
    his = models.FloatField(blank=True, null=True)
    arg = models.FloatField(blank=True, null=True)
    asp = models.FloatField(blank=True, null=True)
    glu = models.FloatField(blank=True, null=True)
    gly = models.FloatField(blank=True, null=True)
    pro = models.FloatField(blank=True, null=True)
    ser = models.FloatField(blank=True, null=True)
    hyp = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'favorite'


class FoodLog(models.Model):
    id = models.UUIDField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    food_name = models.TextField()
    amount = models.FloatField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'food_log'


class Fooddata(models.Model):
    food_number = models.CharField(primary_key=True, max_length=5)
    food_name = models.TextField()
    kcal = models.FloatField(blank=True, null=True)
    water = models.FloatField(blank=True, null=True)
    protein = models.FloatField(blank=True, null=True)
    fat = models.FloatField(blank=True, null=True)
    carbo = models.FloatField(blank=True, null=True)
    ile = models.FloatField(blank=True, null=True)
    leu = models.FloatField(blank=True, null=True)
    lys = models.FloatField(blank=True, null=True)
    met = models.FloatField(blank=True, null=True)
    cys = models.FloatField(blank=True, null=True)
    phe = models.FloatField(blank=True, null=True)
    tyr = models.FloatField(blank=True, null=True)
    thr = models.FloatField(blank=True, null=True)
    trp = models.FloatField(blank=True, null=True)
    val = models.FloatField(blank=True, null=True)
    his = models.FloatField(blank=True, null=True)
    arg = models.FloatField(blank=True, null=True)
    ala = models.FloatField(blank=True, null=True)
    asp = models.FloatField(blank=True, null=True)
    glu = models.FloatField(blank=True, null=True)
    gly = models.FloatField(blank=True, null=True)
    pro = models.FloatField(blank=True, null=True)
    ser = models.FloatField(blank=True, null=True)
    hyp = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fooddata'


class Profile(models.Model):
    id = models.UUIDField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField()
    update_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'profile'


class User(models.Model):
    id = models.UUIDField(primary_key=True)
    email = models.TextField()
    remember_token = models.TextField()
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'user'
