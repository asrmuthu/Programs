try:
    file = open("./txt/first.txt", "a")
    file.write("\ntamilnadu \n theni") #overwrite -> irukura text delete pannitu athuku pathila entha text ah add pannum
    file.close()

    file=open("./txt/first.txt","r")
    print(file.read())  # read all line
except FileNotFoundError:
    print("Error : File not found")
else:
    file.close()