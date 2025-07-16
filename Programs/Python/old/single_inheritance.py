class nokia:
    company ="nokia india"
    website ="www.nokiaindia.com"
    def address(self):
        print("adress: 79 south theni")
class nokia100(nokia):
    def __init__(self):
        self.name="Nokia"
        self.year=1998
    def produc_details(self):
        print("company :", self.company)
        print("website :", self.website)
        print("name :", self.name)
        print("year :", self.year)
mobile =nokia100()
mobile.produc_details()
mobile.address()