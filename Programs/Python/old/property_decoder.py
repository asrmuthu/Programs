class user:
    def __init__(self,name,age):
        self.name=name
        self.age=age
        #self.msgg=self.name+" is "+str(self.age)+" years old"

    @property
    def msg(self):
        return self.name+" is "+str(self.age)+" years old"
    
o=user("muthu",25)
print(o.name)
print(o.age)
print(o.msg)
o.age="45"
print(o.msg)