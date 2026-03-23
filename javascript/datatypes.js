let Name = "Gokul";
let age = 27;
let IsStudent = true;
let mark = 490;
console.log(Name, age, IsStudent, mark);

// Question 1 :
let StudentName = "Gokul";
let StudentAge = 27;
console.log("My name is " + StudentName + " and I am " + StudentAge + " years old")

// Question 2 :
let isStudent = true
console.log("Student Status: "+ isStudent)

// Question 3 :
let Arr = [10,20,30,40,50]
console.log(Arr[0]+ ' and ' + Arr[3])

// Question 4 :
// methode 1 :
let sMark = [70,87,95,93,94]
let total = sMark.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", total);
// methode 2 :
let salary = [10000, 15000, 20000];
let totalSalary = salary.reduce((sum, amt) => sum + amt, 0)
console.log('Total Salary:', totalSalary)
// methode 3 :
let prices = [250, 300, 150, 100];
let totalprices = prices.reduce((sum, pric) => sum + pric, 0)
console.log('Total prices:', totalprices)
// methode 4 :
let nums = [2, 3, 4];
let mNums = nums.reduce((sum, num) => sum * num, 1);
console.log('Total nums:', mNums)
// methode 5 :
let marks = [45, 88, 76, 99, 67];
let max = marks.reduce((max, mark) => {
    return mark > max ? mark : max;
}, marks[0]);
console.log("Max:", max);
// methode 6 :
let Num = [45, 88, 76, 99, 67];
let low = marks.reduce((low, mark) => {
    return mark < low ? mark : low;
}, marks[0]);
console.log("Low:", low);
// methode 7 :
let Enums = [1, 2, 3, 4, 5, 6];
let evenSum = Enums.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
}, 0);
console.log("Even Sum:", evenSum);
// methode 8 :
let words = ["Hello", "World", "JS"];
let sentence = words.reduce((str, word) => str + " " + word);
console.log(sentence);

let items = [
    { price: 100 },
    { price: 200 },
    { price: 300 }
];
let totalitem = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price:", totalitem);

