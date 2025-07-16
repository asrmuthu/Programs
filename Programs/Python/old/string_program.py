#string operations
s="muthu, pandi, raj"
print(s)
print(s.upper())
print(s.lower())
print(s.capitalize())
print(s.title())
print(s.count("u"))
print(s.endswith("j"))
print(s.find("u"))
print(s.find("u",2))
print(s.replace("raj","R"))
a="muthu123"
print("Is upper",a.isupper())
print("Is lower",a.islower())
print("Is alpha",a.isalpha())
print("Is num",a.isalnum())
print("Is num",s.split( ))
b="   muthu123     "
print(len(b.lstrip()))
print(len(b.rstrip()))
print(len(b.strip()))
c='12-02-2021'
print(c.partition('-'))
s="sample"
print(s[0:2])
print(s[2:])
print(s[::-1]) #reverse the letter




