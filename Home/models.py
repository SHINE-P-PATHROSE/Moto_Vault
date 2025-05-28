
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Vehicle(models.Model):
    STATE_CHOICES = [
        ('KL', 'Kerala'),
        ('TN', 'Tamil Nadu'),
        ('AP', 'Andhra Pradesh'),
        ('KA', 'Karnataka'),
    ]

    STATUS_CHOICES = [
        ('expired', 'Expired'),
        ('urgent', 'Urgent (2 days left)'),
        ('month1', '1 Month Left'),
        ('month2', '2 Months Left'),
        ('month3', '3 Months Left'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    vehicle_name = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=20)
    state = models.CharField(max_length=2, choices=STATE_CHOICES)
    location = models.CharField(max_length=100)
    expiry_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.vehicle_name} - {self.registration_number}"

    def get_absolute_url(self):
        return reverse('vehicle-detail', kwargs={'pk': self.pk})

    def update_status(self):
        # Logic to update status based on expiry date
        pass