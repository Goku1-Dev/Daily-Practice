// Problem 1: Arithmetic Operators (Basic math)
let x = 15;
let y = 4;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus (Remainder):", x % y);
console.log("Exponentiation (Power):", x ** y);

// Problem 2: Increment and Decrement
let count = 10;
count++;
console.log("After increment:", count);
count--;
console.log("After decrement:", count);

// Problem 3: Assignment Operators
let a = 5;
a += 10; // a = a + 10
a *= 2;  // a = a * 2
console.log("Value of a after += and *= :", a);

// Problem 4: Comparison Operators (Equal, Strict Equal)
let num1 = 10;
let num2 = "10";
console.log("num1 == num2:", num1 == num2);   // true (checks value)
console.log("num1 === num2:", num1 === num2); // false (checks value and type)

// Problem 5: Comparison Operators (Greater/Less)
let p = 20;
let q = 15;
console.log("p > q:", p > q);
console.log("p <= q:", p <= q);

// Problem 6: Logical Operators (AND, OR, NOT)
let isAdult = true;
let hasLicense = false;
console.log("Can drive (isAdult && hasLicense):", isAdult && hasLicense);
console.log("Can enter (isAdult || hasLicense):", isAdult || hasLicense);
console.log("Opposite of isAdult:", !isAdult);

// Problem 7: Ternary Operator (Conditional)
let age = 17;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("User status:", status);

// Problem 8: Bitwise Operator (Optional but useful)
let n = 5; // 0101 in binary
let m = 1; // 0001 in binary
console.log("Bitwise AND (n & m):", n & m); // 0001 (1)

// Problem 9: String Operators (Concatenation)
let str1 = "Hello";
let str2 = "World";
console.log("Joined String:", str1 + " " + str2);

// Problem 10: Nullish Coalescing Operator
let username = null;
let defaultName = "Guest";
let currentName = username ?? defaultName;
console.log("Username:", currentName);
