import os

if os.path.exists("./txt/test.txt"):
    os.remove("./txt/test.txt")
elif os.path.exists("nnn"):
    os.rmdir("nnn")
else:
    print("file not found")