class ATM():
    def check_balance(self):
        print("Available balance: 10000")
    def withdraw(self, amount):
        self.amount = 10000
        if self.amount > 10000:
            print("Insufficient fund!")
        else:
            self.balance = 10000 - amount
            print(f"{amount} withdrawal successful")
            print("Current  balance:", self.balance)
    def deposit(self, amount):
        self.amount = amount
        self.balance = 10000 + self.amount
        print("Current balance:", self.balance)
        print()

atm = ATM()
pin = 1234
a = int(input("Enter the 4 digit pin number: "))
if a == 1234:
    print(""" WELCOME
                Please Select the option:
                1. Check Balance
                2. Withdraw
                3. Deposit
                4. Exit\n
            """)
    inp = input()
    if inp == "1":
        atm.check_balance()
    elif inp == "2":
        amount = int(input("How much you want to withdraw:"))
        atm.withdraw(amount)
    elif inp == "3":
        amount = int(input("How much you want to deposit:"))
        atm.deposit(amount)
    else:
        print("Thank you")
else:
        print("Pin number is not correct")