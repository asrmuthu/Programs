class add:
    def __init__(self,a):
        self.a=a
    def __add__(o1,o2): #magic method
        return o1.a+o2.a
    def __sub__(o1,o2): #magic method
        return o1.a-o2.a
o1=add(20)
o2=add(10)
print("Total : ", (o1+o2))
print("diff : ", (o1-o2))