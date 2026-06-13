// 1. Two Numbers Add
let a = 10;
let b = 20;
console.log(a+b)

// 2. Even or Odd
let num = 14;
if(num%2==0){
    console.log('Even')
}
else{
    console.log('Odd')
}

// 3. Largest of Two Numbers
let num1 = 50;
let num2 = 80;
let Largestnum;
if(num1 > num2){
    Largestnum=num1;
}
else{
    Largestnum=num2
}
console.log(Largestnum);

// 4. Largest of Three Numbers
let num3 = 10;
let num4 = 40;
let num5 = 55;
let Largestnumber;
if (num3 > num4){
    Largestnumber=num3
}
else if (num4 > num5) {
    Largestnumber=num4
} else {
    Largestnumber=num5
}
console.log(Largestnumber)

// 5. Positive, Negative, or Zero
let num6 = 7;
if(num6 === 0){
    console.log('number is 0')
}
else if (num6 > 0){
    console.log('number is positive')
}
else{
    console.log('number is negative')
}

// 6. Multiplication Table
let number = 5;
multiplication =(number) =>{
    for(let i=1;i<11;i++){
        console.log(`${number} * ${i} = ${number * i}`)
    }
}
multiplication(number)

// 7. Sum of First N Numbers
let sum = 5;
sumofnumber = (n) =>{
    for(let i=1;i<n;i++){
        console.log(sum += i)
    }
}
sumofnumber(sum)

// 8. Factorial
let total = 5;
factorial = (x) => {
    if(x === 0){
        return 1
    }
    return x * factorial(x - 1)
}
console.log(factorial(total))

