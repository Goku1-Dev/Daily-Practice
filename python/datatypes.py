# Initial setup
Name = "Gokul"
age = 27
IsStudent = True
mark = 490
print(Name, age, IsStudent, mark)

# Question 1 :
StudentName = "Gokul"
StudentAge = 27
print(f"My name is {StudentName} and I am {StudentAge} years old")

# Question 2 :
isStudent = True
print("Student Status: " + str(isStudent))

# Question 3 :
Arr = [10, 20, 30, 40, 50]
print(f"{Arr[0]} and {Arr[3]}")

# Question 4 :
# method 1 :
sMark = [70, 87, 95, 93, 94]
total = sum(sMark)
print("Total Marks:", total)

# method 2 :
salary = [10000, 15000, 20000]
totalSalary = sum(salary)
print('Total Salary:', totalSalary)

# method 3 :
prices = [250, 300, 150, 100]
totalprices = sum(prices)
print('Total prices:', totalprices)

# method 4 :
import math
nums = [2, 3, 4]
mNums = math.prod(nums)
print('Total nums:', mNums)

# method 5 :
marks = [45, 88, 76, 99, 67]
max_val = max(marks)
print("Max:", max_val)

# method 6 :
Num = [45, 88, 76, 99, 67]
low = min(Num)
print("Low:", low)

# method 7 :
Enums = [1, 2, 3, 4, 5, 6]
evenSum = sum(num for num in Enums if num % 2 == 0)
print("Even Sum:", evenSum)

# method 8 :
words = ["Hello", "World", "JS"]
sentence = " ".join(words)
print(sentence)

items = [
    {"price": 100},
    {"price": 200},
    {"price": 300}
]
totalitem = sum(item["price"] for item in items)
print("Total Price:", totalitem)

# Question 5 :
Data = {
    "nam": 'Gokul',
    "age": 27
}
print(f"My name is {Data['nam']} and I am {Data['age']} Years old")

# Question 6 :
a = 10
b = "20"
# In JS: 10 + "20" = "1020". In Python, we need explicit conversion to replicate this behavior.
print("Result: " + str(a) + b)

# Question 7 :
value = True
print(type(value))

# Question 8 :
num = "50"
# In JS: "50" * 2 = 100. In Python, we need explicit conversion.
ans = int(num) * 2
print(ans)

# Question 9 :
arr = ["Gokul", 27, True]
print(arr[0], arr[1], arr[2])

# Question 10 :
student = {
    "name": "Gokul",
    "marks": [80, 90, 100]
}
datePerson = sum(student["marks"])
print(f"My Name is {student['name']} and my totel mark is {datePerson}")
