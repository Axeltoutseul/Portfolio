from django.contrib import admin
from django.urls import path
from page_personnelle.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('../page_personnelle/', index),
]
