#function overriding
class employee:
    def workinghours(self):
        self.hrs=50 #instance value
    def printhrs(self):
        print("total working hrs :", self.hrs)
class trainee(employee):
    def workinghours(self):
        self.hrs=60
    def reset_hrs(self):
        super().workinghours()
emp = employee()
emp.workinghours()
emp.printhrs()

tr=trainee()
tr.workinghours()
tr.printhrs()
tr.reset_hrs()
tr.printhrs()

"""

function or method Overriding:
same name,same parameter but different class
When the method signature (name and parameters) are the same in the superclass and the child class, it’s called Overriding.it involves multiple class(inheritance),parameter must be same.Method overriding is the example of run time polymorphism.

function or method Overloading:same name but different parameters with in one class
When two or more methods in the same class have the same name but different parameters, it’s called Overloading.Method overloading is performed within class.parameter must be different.Method overloading is the example of compile time polymorphism.
"""
