class stu:
    name="muthu"
    age="28"
    def printall(self,gendar):
        print("name: ", stu.name)
        print("name: ", stu.age)
        print("gendar: ", gendar) #instance variable
obj = stu()
obj.printall("male") #instance method

"""output:
name:  muthu
name:  28
gendar:  male
"""