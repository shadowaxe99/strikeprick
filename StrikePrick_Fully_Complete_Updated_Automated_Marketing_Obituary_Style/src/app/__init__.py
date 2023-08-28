# This is the __init__.py file for the app module

# Import necessary modules and packages

from django.apps import AppConfig


class MyAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app'

    def ready(self):
        # Import signals module to register signals
        import app.signals

# End of __init__.py file