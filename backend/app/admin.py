from django.contrib import admin
from .models import User, Profile, Fooddata, Favorite, FoodLog
# Register your models here.

admin.site.register(Fooddata)
admin.site.register(Favorite)
admin.site.register(FoodLog)
admin.site.register(Profile)
admin.site.register(User)
