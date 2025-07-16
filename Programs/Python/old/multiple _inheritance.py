class father:
    def fishing(self):
        print("learn fishing")
class mother:
    def cooking(self):
        print("learning cooking")
class son(father,mother):
    def bike(self):
        print("learning ride")
o=son()
o.bike()
o.cooking()
o.fishing()