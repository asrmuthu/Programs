from abc import ABC, abstractmethod

class reservebank(ABC):
    @abstractmethod
    def loan(self):
        pass

    @abstractmethod
    def credit(self):
        pass

    @abstractmethod
    def depit(self):
        pass
class hdfc(reservebank):
    def loan(self):
        print("loan interst 7.5%")
    def credit(self):
        print("credit 2%")
    def depit(self):
        print("depit 3%")
    def card(self):
        print("card 10%")
h=hdfc()
h.loan()
h.depit()
h.card()
h.credit()