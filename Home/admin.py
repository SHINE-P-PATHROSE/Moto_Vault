# motovault/admin.py
from django.contrib import admin
from .models import Vehicle


class VehicleAdmin(admin.ModelAdmin):
    list_display = ('vehicle_name', 'registration_number', 'state', 'status', 'expiry_date', 'owner')
    list_filter = ('state', 'status', 'owner')
    search_fields = ('vehicle_name', 'registration_number', 'location')
    list_per_page = 25
    date_hierarchy = 'expiry_date'
    ordering = ('-expiry_date',)

    # Optional: Customize how fields are displayed in the admin form
    fieldsets = (
        ('Basic Information', {
            'fields': ('owner', 'vehicle_name', 'registration_number')
        }),
        ('Location Details', {
            'fields': ('state', 'location')
        }),
        ('Expiry Information', {
            'fields': ('expiry_date', 'status')
        }),
    )


# Register the model with its admin class
admin.site.register(Vehicle, VehicleAdmin)