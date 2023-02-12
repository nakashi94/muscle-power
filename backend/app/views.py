from rest_framework import generics
from .models import Fooddata, FoodLog, User
from .serializers import FooddataSerializer, UserSerializer, FoodLogSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


def get_food(request):
    fooddata = FoodLog.objects.filter(user="5d15a9e6-2838-d994-0d28-99c30b0b0bdf", created_at__range=["2023-02-01","2023-02-13"])
    print(len(fooddata))
    print(type(fooddata))
    foodlist = []
    for food in fooddata:
        print(food.created_at)
        a = Fooddata.objects.get(food_name=food)
        print(a)
        foodlist.append(a)
        print(a.kcal)

    return HttpResponse(1) 

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
