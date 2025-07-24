nums = [10, 25, 3, 8, 16]
def square(x):
    return x * x
squared = list(map(square, nums))
print(squared)  # Output: [100, 625, 9, 64, 256]

#---------------------
def is_even(x):
    return x % 2 == 0

nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(is_even, nums))
print(evens)  # Output: [2, 4, 6]

#---------------------
from functools import reduce
def multiply(x, y):
    return x * y

nums = [1, 2, 3, 4]
product = list(reduce(multiply, nums))
print(product)  # Output: 24
