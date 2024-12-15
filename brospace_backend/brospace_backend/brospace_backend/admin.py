from django.contrib import admin
from .models import Profile, Post, Message, Challenge, Event, Group, Comment  # Renamed 'comment' to 'Comment'

admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(Message)
admin.site.register(Challenge)
admin.site.register(Event)
admin.site.register(Group)
admin.site.register(Comment)  # Correctly using 'Comment' here
