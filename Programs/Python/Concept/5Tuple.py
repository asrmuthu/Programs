mytuple = ("apple", "banana", "cherry")
print(mytuple[0])  # Output: apple
print(mytuple[1:3])  # Output: ('banana', 'cherry')
print(len(mytuple))  # Output: 3
print(mytuple[-1])  # Output: cherry
print(mytuple + ("orange", "grape"))  # Concatenates tuples
b = list(mytuple) # Converts tuple to list
print(b)  # Output: ['apple', 'banana', 'cherry']