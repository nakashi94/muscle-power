from rest_framework import generics
from .models import Fooddata, FoodLog, User
from .serializers import FooddataSerializer, UserSerializer, FoodLogSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import datetime


def get_food(request):
    fooddata = FoodLog.objects.filter(user="5d15a9e6-2838-d994-0d28-99c30b0b0bdf", created_at__range=["2023-02-06","2023-02-13"]).order_by("created_at")
    dt1 = datetime.datetime.now(datetime.timezone.utc)
    foodlist = [{"kcal": 0, "protein" : 0, "fat" : 0, "carbo" : 0}] * 7
    for food in fooddata:
        day = str(dt1 - food.created_at)[:5]
        if day == "6 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[0]["kcal"] += food_deteil.kcal
            foodlist[0]["protein"] += food_deteil.protein
            foodlist[0]["fat"] += food_deteil.fat
            foodlist[0]["carbo"] += food_deteil.carbo
        elif day == "5 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[1]["kcal"] += food_deteil.kcal
            foodlist[1]["protein"] += food_deteil.protein
            foodlist[1]["fat"] += food_deteil.fat
            foodlist[1]["carbo"] += food_deteil.carbo
        elif day == "4 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[2]["kcal"] += food_deteil.kcal
            foodlist[2]["protein"] += food_deteil.protein
            foodlist[2]["fat"] += food_deteil.fat
            foodlist[2]["carbo"] += food_deteil.carbo
        elif day == "3 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[3]["kcal"] += food_deteil.kcal
            foodlist[3]["protein"] += food_deteil.protein
            foodlist[3]["fat"] += food_deteil.fat
            foodlist[3]["carbo"] += food_deteil.carbo
        elif day == "2 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[4]["kcal"] += food_deteil.kcal
            foodlist[4]["protein"] += food_deteil.protein
            foodlist[4]["fat"] += food_deteil.fat
            foodlist[4]["carbo"] += food_deteil.carbo
        elif day == "1 day":
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[5]["kcal"] += food_deteil.kcal
            foodlist[5]["protein"] += food_deteil.protein
            foodlist[5]["fat"] += food_deteil.fat
            foodlist[5]["carbo"] += food_deteil.carbo
        else:
            food_deteil = Fooddata.objects.get(food_name=food)
            foodlist[6]["kcal"] += food_deteil.kcal
            foodlist[6]["protein"] += food_deteil.protein
            foodlist[6]["fat"] += food_deteil.fat
            foodlist[6]["carbo"] += food_deteil.carbo
    print(foodlist)


    return JsonResponse(foodlist, safe=False)

# def daily_nutrient(foodlist:list):






class FooddataViewSet(generics.ListAPIView):
    queryset = Fooddata.objects.all()
    serializer_class = FooddataSerializer
    def get(self, request):
        query = Fooddata.objects.all()
        return HttpResponse(query)


class FoodPick(generics.RetrieveAPIView):
    queryset = Fooddata.objects.all()
    serializer_class = FooddataSerializer
    # **kwargsにfooddataのPKが入っている
    # def get(self, request, *args, **kwargs):
    #     print(self.serializer_class)
    #     return JsonResponse(self.serializer_class)


class UserViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class FoodLogViewSet(generics.ListCreateAPIView):
    queryset = FoodLog.objects.all()
    serializer_class = FoodLogSerializer


class FoodLogPick(generics.RetrieveAPIView):
    queryset = FoodLog.objects.all()
    serializer_class = FoodLogSerializer
