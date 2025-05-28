from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Vehicle


@login_required
def home(request):
    if request.user.is_superuser:
        vehicles = Vehicle.objects.all()  # Superuser sees all
    else:
        vehicles = Vehicle.objects.filter(owner=request.user)  # Others see only their own

    context = {'vehicles': vehicles}
    return render(request, 'sample_home.html')

def login_page(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Authenticate using email as username
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid email or password')

    return render(request, 'Login.html')

def signup_page(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
        elif User.objects.filter(username=email).exists():
            messages.error(request, "Email already exists.")
        else:
            try:
                user = User.objects.create_user(username=email, email=email, password=password)
                user.first_name = username
                user.save()
                messages.success(request, "Account created successfully! Please login.")
                return redirect('login_page')
            except Exception as e:
                messages.error(request, f"Error creating account: {str(e)}")

    return render(request, 'Login.html')

def logout_view(request):
    logout(request)
    return redirect('login_page')