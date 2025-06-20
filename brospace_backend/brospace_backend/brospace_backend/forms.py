from django import forms
from django.contrib.auth.forms import UserCreationForm, authenticate
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        
class LoginForm(authenticate):
    class Meta:
        model = User
        fields = ['username', 'password']