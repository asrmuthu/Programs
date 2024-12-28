try:
    file=open("./txt/first.txt","r")
    print(file.read()) #read all line
except FileNotFoundError:
    print("Error : File not found")
else:
    file.close()