#data abstaction is like tv. veli totram mattum theriyum ul thotram theriyathu

class Library:
    def __init__(self,books):
        self.books=books
    def list_books(self):
        print("available books")
        for book in self.books:
            print(book)
    def borrow_book(self, borrow_book):
        if borrow_book in self.books:
            print("get your book now")
            self.books.remove(borrow_book)
        else:
            print("book not avilable")
    def receive_book(self, receive_book):
        print("you have returned the book")
        self.books.append(receive_book)

books =['c','c++','java']
o=Library(books)
msg="""
1.Display book
2.Borrow Book
3.Return Book
"""
while True:
    print(msg)
    ch =int(input("enter the number: "))
    if ch==1:
        o.list_books()
    elif ch==2:
        book=input("enter the book name to borrow: ")
        o.borrow_book(book)
    elif ch==3:
        book =input("enter the name of return book: ")
        o.receive_book(book)
    else:
        print("thank you")
        quit()