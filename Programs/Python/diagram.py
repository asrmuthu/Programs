for i in range(1,10):
  print("* " *i)
row =int(input("enter the value "))
for i in range(1, row+1):
  for j in range(1, i+1):
    print(j, end=" ")
  print()

