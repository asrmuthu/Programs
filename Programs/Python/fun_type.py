#total function 10
#1.without return and without arguments
def add(): #without arguments
    a=5
    b=6
    c=a+b
    print("total",c) #no return the value
add()

#2.without return and with arguments
def sub(a,b):
    c=a-b
    print("total",c)
sub(6,8)

#3.with return and without arguments
def mul():
    c=6*8
    return c

x=mul()
print("total",x)

#4.with return and with arguments
def mul(a,b):
    c=a/b
    return c

x=mul(6,8)
print("total",x)

#Arbitrary arugument function(*)- many arguments will pass - tubel
def students(*name):
    print(name)
    for i in name:
        print(i)
students("muthu","pandi","raj","mari")

#5.keyword arugument funnction - aruguemnts la keyword ah coorect ah kuduthu, positiona mathi kudukalam
def keyw(name,age):
    print(name,"age is",age)
keyw(age=25,name="muthu")

#6.arbitrary keyword arguments in python(**) - dict
def key_arb(**data):
    print(data)
    for i in data:
        print(i)
key_arb(name="muthu", age=25, gender="Male")

#7.defalut parameter fun
def defal_para(name,city="chennai"):
    print(name,"is from",city)
defal_para("arun")
defal_para("pandi","theni")

#8.paasing a list as an arguments
def total(marks):
    return sum(marks)
print("total : ", total([96,93,99,99,96]))

#9.recursive function- thanna thanne work pannum
def factorial(x):
    if x==1:
        return 1
    else:
        return (x * factorial(x-1))
print("factorial : ", factorial(5))

#10.lambda
c=lambda a,b:a*b
print(c(10,15))


