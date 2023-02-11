from django.contrib import admin
from .models import Fooddata, Favorite, FoodLog, Profile, User
# Register your models here.

admin.site.register(Fooddata)
admin.site.register(Favorite)
admin.site.register(FoodLog)
admin.site.register(Profile)
admin.site.register(User)
