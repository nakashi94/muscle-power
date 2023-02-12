from django.urls import path, include
from . import views


urlpatterns = [
    path('weeklyfood/', views.weeklyfood, name='weeklyfood'),
    path('fooddata/<slug:pk>/', views.FoodPick.as_view(), name = "FoodPick"),
    path('fooddata/', views.FooddataViewSet.as_view(), name = "FooddataViewSet"),
    path('user/', views.UserViewSet.as_view(), name = "UserViewSet"),
    path('foodlog/<uuid:pk>', views.FoodLogPick.as_view(), name = "FoodLogPick"),
    path('foodlog/', views.FoodLogViewSet.as_view(), name = "FoodLogViewSet"),
]
