//1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.


let number = maxOfTwoNumbers(150, 155)

console.log(number)

function maxOfTwoNumbers(number1, number2) {

    if (number1 > number2) {
        console.log(number1 + " is larger than " + number2);
    } else {
        console.log(number2 + " is larger than " + number1);
    }
}


//#2

let numero = maxOfThreeNumbers(3000, 150, 7522)

console.log(numero)

function maxOfThreeNumbers(num1, num2, num3) {

    if ((num1 > num2) && (num1 > num3)) {
        console.log(num1 + " is the largest number.")
    } else if ((num2 > num1) && (num2 > num3)) {
        console.log(num2 + " is the largest number")
    } else if ((num3 > num1) && (num3 > num2)) {
        console.log(num3 + " is the largest number")
    }

}