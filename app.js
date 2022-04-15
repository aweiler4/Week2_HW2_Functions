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

//#3

function isCharacterAVowel(char){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    console.log('The character is a vowel.')}
    else {console.log('The character is a consinant')
    }
} 
isCharacterAVowel('x')

//#4
function sumArray(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array [i]
    }
return total;
}

sumArray[3, 5, 6, 8, 44, 56]

function productArray(arrayProduct){
    let total2 = 0
    for (let c = 0; c < arrayproduct.length; c++){
        total2 += arrayProduct [i]
    }
return total2;
}

productArray[2, 5 , 34, 45]

//#5

function numOfArguments() {
    return arguments.length;
}

console.log(numOfArguments(10, 14, 23));

//#6
function reverse(str) {
    let text = '';

    for (i =str.length - 1; i >=0; i--) {
        text += str[i];
        continue
    }
    return text.toLowerCase();
}

console.log(reverse('Alex Weiler'));

//#7

function longestWord(str) {
    let lngstWord = str.split('').sort(function(a, b) {return b.length - a.length;});
    return lngstWord[0].length;
}
longestWord('The quick brown fox jumped over the lazy dog');
console.log(longestWord);

//#8
let filterLongWords = function(array, int){
    let length = array.length;
    let longestWords = [];
    for (i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }
  console.log(filterLongWords)

