# for num in range(10, 20):
#     print(num)
# for i in range(2, num): # 11, i = 3
#     if(num % i == 0):
#         j = num / i
#         print(num, " equals ", i, " ", j)
#         break;
# else:
#     print(num, " is a prime number")

# for x in range(1, 11):
#     for y in range(1, 11):
#         print(x, " x ", y, "=", x*y, end="\t")
#     print()
# loop once
# for firstNumberNakoNi in range(1):
#     # loop 10 times
#     for secondnumNakoNi in range(1, 11):
#         print(secondnumNakoNi)

# count = 1
# while count <= 9:
#     print("current value of count: ", count)
#     count = count + 1

# fruits = ['banana', 'apple', 'mango']
# for fruit in fruits:
#     if(fruit == "apple"):
#         print("Apple is my favorite")
#     print("", fruit)

# Part 1:
# 1.
# CREATE A MULTIPLICATION TABLE(using loops)
# EXPECTED OUTPUT:
# 1 x 1 = 1  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 2 = 2  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 3 = 3  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 4 = 4  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 5 = 5  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 6 = 6  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 7 = 7  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 8 = 8  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 9 = 9  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10
# 1 x 10 = 10  1 x 2 = 2  1 x 3 = 3  1 x 4 = 4 1 x 5 = 5  1 x 6 = 6  1 x 7 = 7  1 x 8 = 8  1 x 9 = 9  1 x 10 = 10


# 2.
# CREATE A PATTERN(using loops)
# EXPECTED OUTPUT:
# *
# **
# ***
# ****
# *****
# ******

# for x in range(0, 8):
#     for y in range(1, x):
#         print("* ", end="")

#     print()
# This is the example of print simple pyramid pattern
# n = int(input("Enter the number of rows"))
# # outer loop to handle number of rows
# for i in range(0, n):
#     # inner loop to handle number of columns
#     # values is changing according to outer loop
#     for j in range(0, i + 1):
#         # printing stars
#         print("* ", end="")

#     # ending line after each row
#     print()
# *******
# ******
# *****
# ****
# ***
# **
# *

# 3.
# CREATE A PATTERN(using loops)
# EXPECTED OUTPUT:
# 1
# 22
# 333
# 4444
# 55555
# 666666

for x in range(0, 7):
    for y in range(0, x):
        print(x, end="")

    print()
