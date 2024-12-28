class student:
    def __init__(self,total):
        self._total=total
    def average(self):
        return self._total/5.0
    @property #getter
    def total(self):
        return self._total
    @total.setter #setter
    def total(self, t):
        if t<0 or t>500:
            print("invalid value")
        else:
            self._total=t
o=student(450)
print("total : ",o.total)
print("average: ",o.average())
o.total=550
print("total: ",o.total)
print("average: ",o.average())