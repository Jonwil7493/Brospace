from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GroupViewSet, PostViewSet, CommentViewSet, ChallengeViewSet
from django.contrib import admin
from . import views

router = DefaultRouter()
router.register(r'groups', GroupViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'challenges', ChallengeViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    
    # User authentication endpoints
    path('api/register/', views.register, name='register'),  # Register a new user (API)
    path('api/login/', views.log_in, name='login'),  # User login (API)
    path('api/logout/', views.log_out, name='logout'),  # User logout (API)
    
    # Frontend signup page
    path('signup/', views.sign_up, name='signup'),  # Signup page (view)
    
    # Other endpoints
    path('dashboard/', views.dashboard, name='dashboard'),  # Dashboard view
]
