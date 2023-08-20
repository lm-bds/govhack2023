# cluster/views.py

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClusterSerializer
from django.http import JsonResponse
from .models import Cluster


class ClusterViewSet(viewsets.ModelViewSet):
    queryset = Cluster.objects.all()
    serializer_class = ClusterSerializer


def get_image_by_cluster(request, cluster):
    try:
        cluster = Cluster.objects.get(cluster=cluster)
        image_url = cluster.image.url
        return JsonResponse({'image_url': image_url})
    except Cluster.DoesNotExist:
        return JsonResponse({'error': 'Cluster not found'}, status=404)

