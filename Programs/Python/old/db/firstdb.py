import sqlite3

con=sqlite3.connect('users.db')

def insertData(name,age,city):
    qry="insert into users (NAME,AGE,CITY) values (?,?,?);"
    con.execute(qry,(name,age,city))
    con.commit()
    print("user details added")



print("""
1.insert
2.update
3.Delete
4.Select
""")

ch=1
while ch==1:
    c=int(input("select your choice: "))
    if(c==1):
        print("Add new record")
        name=input("enter the name ")
        age=input("enter the age ")
        city=input("enter the city ")
        insertData(name,age,city)
    elif(c==2):
        print("Edit a record")
    elif (c == 3):
        print("Delete a record")
    elif (c == 4):
        print("print record")
    else:
        print("Invalid selection")
    ch=int(input("enter 1 to continute: "))
print("thank you")
