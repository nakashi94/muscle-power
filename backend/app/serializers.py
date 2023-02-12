from rest_framework import serializers
from .models import User, Profile, Fooddata, Favorite, FoodLog


class FooddataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fooddata
        fields = ["food_name", "kcal","protein", "fat", "carbo"]


class FoodLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodLog
        fields = ["id", "user_id", "food_name", "amount", "created_at", "updated_at"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "remember_token", "created_at"]
