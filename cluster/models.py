# Path: cluster/models.py

from django.db import models


class Cluster(models.Model):
    cluster = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return f"Cluster: {self.cluster}"
