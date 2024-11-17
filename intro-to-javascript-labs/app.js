

// Exercise 3

let myNumber = 12

if (myNumber % 2 == 0) {
    console.log(`${myNumber} is an even number`)
}
else {
    console.log(`${myNumber} is an odd number`)
}


// Exercise 4

let num1 = 10
let num2 = 20
let num3 = 40

let largest = 0
let numberList = [num1, num2, num3]

for (num of numberList) {
    if (num > largest) {
        largest = num
    }
}

console.log("Largest number is " + largest)


// Exercise 5

let myGrade = 85

let output = ""

if (myGrade >= 90 && myGrade <= 100) {
    output = "**A**"
}
else if (myGrade >= 80 && myGrade <= 89) {
    output = "**B**"
}
else if (myGrade >= 70 && myGrade <= 79) {
    output = "**C**"
}
else if (myGrade >= 60 && myGrade <= 69) {
    output = "**D**"
}
else {
    output = "**F**"
}


console.log("You got an " + output)


// Exercise 6

let multNumber = 8

console.log("Multiplication Table of " + multNumber)
for (i = 1; i <= 10; i++) {
    console.log(`${multNumber} X ${i} = ${multNumber * i}`)
}


//  Exercise 7

let myOriginalNumber = 5
let factorial = 1

for (i = myOriginalNumber; i >= 1; i--) {
    factorial *= i
}

console.log(`${myOriginalNumber}! = ${factorial}`)


// Exercise 8

for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
}



