class student():
    name="muthu"
    age="28"
print(student.name)
print(student.age)
student.gendar="male" #add attribute
print(student.gendar)
print(student.__dict__)
del student.age #delete attribute
print(student.__dict__)
obj = student()
print(obj.__dict__)
obj.name="pandi" # instance attribute
print(obj.name)
print(obj.__dict__)

