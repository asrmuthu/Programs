age = int(input("enter your age"))
sex = input("enter your gender")
if(age>50 and age<64 and sex=="female") :
       print("50 % concession for "+sex)
elif (age>60 and sex=="male") :
          print("50% concession for "+sex)
elif (age>65 and sex=="female") :
          print("90% concession for "+sex)
else :
       print("no concession")


