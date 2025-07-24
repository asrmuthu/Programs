for x in range(2, 15, 3):
  print(x)  # Output: 2, 5, 8, 11, 14
#------------------
for x in range(6):
  print(x) # Output: 0, 1, 2, 3, 4, 5
else:
  print("Finally finished!") # Output: Finally finished!
#------------------
for x in range(6):
  if x == 3: break
  print(x) # Output: 0, 1, 2
else:
  print("Finally finished!")
#-------------------
for x in range(6):
  if x == 3: continue
  print(x) # Output: 0, 1, 2, 4, 5
#-------------------
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
  for y in fruits:
    print(x, y)  # Output: red apple, red banana, red cherry, big apple, big banana, big cherry, tasty apple, tasty banana, tasty cherry
#-------------------