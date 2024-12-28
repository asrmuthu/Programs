import random
lower ="abcdefghijklmnopqrstuvwxyz"
upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
num = "0123456789"
sym="!@#$%^&*()_}{'[]\|"
string =lower+upper+num+sym
len = 8
password="".join(random.sample(string,len))
print("your new password is " +password)