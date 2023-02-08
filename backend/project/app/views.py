from django.shortcuts import render

# HTTPResponseというクラスをインポート
from django.http import HttpResponse

# View関数を任意に定義
def index(request):
  return HttpResponse("Hello World")
