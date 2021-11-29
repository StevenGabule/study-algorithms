num1 = input('Enter a first num: ')
num2 = input('Enter a second num: ')

# check for error
if((num1 != "" and num2 != "") and (num1.isalpha() != 1 and num2.isalpha() != 1) and
   (isinstance(float(num1), float) and isinstance(float(num2), float))):
    opr = input('Choose the operator: [+, -, x, /, %]: ')
    total = 0
    num1 = float(num1)
    num2 = float(num2)
    if(opr == "+"):
        total = num1 + num2
    elif(opr == "-"):
        total = num1 - num2
    elif(opr == "x"):
        total = num1 * num2
    elif(opr == "/"):
        if(num2 == 0):
            print("Cannot divide by zero")
        else:
            total = num1 / num2
    elif(opr == "%"):
        total = num1 % num2
    else:
        print("INVALID ENTRY OF OPERATOR!")

    print("Total: ", total)
else:
    print("INVALID INPUT!")
