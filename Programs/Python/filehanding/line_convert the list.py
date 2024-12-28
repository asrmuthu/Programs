try:
    file=open("./txt/first.txt","r")
    #print(file.readline())  #read one file
    #print(file.readline(10)) #read limited letter
    print(file.readlines()) #convert to the list
except FileNotFoundError:
    print("Error : File not found")
else:
    file.close()