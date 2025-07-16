import pyqrcode
url='https://www.google.com/maps/place/Raj+mariyammal+home/@10.0417455,77.5212911,15z/data=!4m2!3m1!1s0x0:0x62d4fc0048e865dc?sa=X&ved=2ahUKEwjDp4ev64D2AhUPyzgGHQHBAzoQ_BJ6BAgkEAU'
k=pyqrcode.create(url)
k.svg('qr.svg',scale=5)