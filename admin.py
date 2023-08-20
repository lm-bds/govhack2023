# cluster/admin.py
from django.contrib import admin
from .models import Cluster


class ClusterAdmin(admin.ModelAdmin):
    list_display = ('cluster', 'id', 'image')


admin.site.register(Cluster, ClusterAdmin)
