class grandfather:
    def fishing(self):
        print("learn fishing")
class father(grandfather):
    def cooking(self):
        print("learning cooking")
class son(father,grandfather):
    def bike(self):
        print("learning ride")
o=son()
f=father()
o.bike()
o.cooking()
o.fishing()
f.fishing()