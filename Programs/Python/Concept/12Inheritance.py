class dad:
    def a(self):
        print("I am your dad")
class mom:
    def a1(self):
        print("I am your mom")
class son(dad, mom):
    def b(self):
        print("I am your son")
class daughter(dad):
    def c(self):
        print("I am your daughter")
class grandson(son):
    def d(self):
        print("I am your grandson")
son1 = son()
daughter1 = daughter()
son1.a()  # Output: I am your dad
son1.a1()  # Output: I am your mom
daughter1.a()  # Output: I am your dad
grandson1 = grandson()
grandson1.a()  # Output: I am your dad
grandson1.b()  # Output: I am your son