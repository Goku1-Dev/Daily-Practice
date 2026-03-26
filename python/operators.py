# Problem 1: Arithmetic Operators
x = 15
y = 4
print("Addition:", x + y)
print("Subtraction:", x - y)
print("Multiplication:", x * y)
print("Division:", x / y)
print("Modulus (Remainder):", x % y)
print("Exponentiation (Power):", x ** y)
print("Floor Division:", x // y) # Unique to Python, returns quotient as integer

# Problem 2: Increment and Decrement
count = 10
count += 1 # Python doesn't have ++ operator
print("After increment:", count)
count -= 1 # Python doesn't have -- operator
print("After decrement:", count)

# Problem 3: Assignment Operators
a = 5
a += 10 # a = a + 10
a *= 2  # a = a * 2
print("Value of a after += and *= :", a)

# Problem 4: Comparison Operators (Equal)
num1 = 10
num2 = "10"
# In Python, num1 == num2 is False because types differ
print("num1 == int(num2):", num1 == int(num2))

# Problem 5: Comparison Operators (Greater/Less)
p = 20
q = 15
print("p > q:", p > q)
print("p <= q:", p <= q)

# Problem 6: Logical Operators (and, or, not)
is_adult = True
has_license = False
print("Can drive (is_adult and has_license):", is_adult and has_license)
print("Can enter (is_adult or has_license):", is_adult or has_license)
print("Opposite of is_adult:", not is_adult)

# Problem 7: Conditional Expressions (Equivalent to Ternary Operator)
age = 17
status = "Adult" if age >= 18 else "Minor"
print("User status:", status)

# Problem 8: Bitwise Operator
n = 5 # 0101 in binary
m = 1 # 0001 in binary
print("Bitwise AND (n & m):", n & m) # 0001 (1)

# Problem 9: Membership Operators (Unique to Python)
fruits = ["apple", "banana", "cherry"]
print("Is 'apple' in fruits?", "apple" in fruits)
print("Is 'grape' not in fruits?", "grape" not in fruits)

# Problem 10: Identity Operators (is, is not)
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1
print("list1 is list2:", list1 is list2) # False (different objects)
print("list1 is list3:", list1 is list3) # True (same object)
print("list1 == list2:", list1 == list2) # True (same values)
