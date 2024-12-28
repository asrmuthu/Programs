#total 123 exception types
#name error exception

import value

try:
   print(a)
except NameError:
    print("A is not defined")
"""output:
A is not defined
"""
try:
   print(10/0)
except ZeroDivisionError:
    print("demonitar not zero")
"""output:
demonitar not zero
"""
try:
  a=int("muthu")
except ValueError:
    print("please enter number only")
"""output:
demonitar not zero
"""
try:
  a=[10,20,30,40,50]
  print(a[10])
except IndexError:
    print("Invalid Index")
"""output:
Invalid Index
"""
try:
    a =open("text.xml")
except FileNotFoundError:
    print("file not found")
else:
    print(a.read())
"""output:
file reading
"""

#multiple exceptions:

try:
    a = [10, 20, 30, 40, 50]
    print(a[1])
    print(10 / 0)
except IndexError:
    print("multiple-Invalid Index")
except ZeroDivisionError:
    print("multiple-demonitar not zero")
"""output:
20
multiple-demonitar not zero
"""