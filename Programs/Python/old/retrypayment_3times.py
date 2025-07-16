actual=1234
b = int(input("enter upi pin "))
if actual!=b :
    for b in range(2):
          print("retry payment")
          b=int(input("enter upi pin "))
    print("maximum attempt tried")
else:
    print("Payment Sucesss")


