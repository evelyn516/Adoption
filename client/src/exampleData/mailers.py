
from django.core.mail import send_mail
"""
data = data from post request
ref = data.key 
emailAddress = data.emailAddress
const subjectLine = `Questions from Adopter! Reference: ${ref}`
shelter_email = post SQL search
"""

send_mail(
    subject,
    message,
    'adopterapp@aol.com',
    [shelter_email],
    fail_silently=False,
)

doc = "https://docs.djangoproject.com/en/4.0/topics/email/"

""" 
email: adopterapp@aol.com password: blastoise98 https://mail.aol.com/webmail-std/en-us/suite
"""

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '?'


EMAIL_HOST = 'smtp.aol.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'adopterapp@aol.com'
EMAIL_HOST_PASSWORD = 'blastoise98'
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False

