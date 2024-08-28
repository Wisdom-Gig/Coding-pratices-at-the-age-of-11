
// ch3
var Firstname = "Wisdom";
var lastName = "Aderinto";
var age = "12";
var school = "Lead British International School";
var Year =  "Year 10";
console.log("My name is " + Firstname + " " +lastName +" .I am " + age +" years old." + "I attend " + school +"."+"I am in "+ Year+".");
// console.log("hello World!")
// console.log(typeof "Wisdom")
// console.log(typeof 42)
// console.log(typeof true) 

// Strings

// const myVariable = "Mathematics"
// String method


// console.log("Wisdom, Anu, Elm, Bambo".split(","))

// ch4
// Numbers

// the Nimber.isNaN() method determines whether the past value is NaN And its type of Number

// A integer is a whole Number
const myNumber = "42";


// A number with a decimal point is a float which referencing to the floating point
const myFloat = "42.0151";

const myString = "42.123abc";

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method passes an argument and returns with a floating point number. If a number cannot be Parsed from the argument, it returns NaN

//The number.parseInt() method parses  a string instrument and returns an integer

// THe toString() method returns a string representing a number

// The toFixed() method formats a number according to how many decimal points you provide as the parameter

// naN is an acroynm for not a number

// Chaning = Using several methods chained together

// console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat("4.237abc").toFixed(2).toString( ));

console.log(Number.isNaN("Wisdom"));

// if you use the number.isNan function for the example above it would give you a statment result of false but if you use the ordinary isNan function it would guve you a statement result of false

// ch5
// Math Methods and Properties

// this will show π number
console.log(Math.PI);
// The trunc methid will remove the decimal like this
console.log(Math.trunc(Math.PI));
// this basically rounds up the number to the nearest whole number
console.log(Math.round (Math.PI));
// This rounds up the number no matter the decimal
console.log(Math.ceil(Math.PI));
//  the number will always be rounded down no matter the decimal
console.log(Math.floor(Math.PI));
// the will square the number the first number is the whole number while the second is the raise to the power
console.log(Math.pow(2, 10));
// this will find the smallest numbers among the set of numbers 
console.log(Math.min(2,0.5,9));
// this will find the biggest number out of the set of numbers
console.log(Math.max(2, 9.2, 9));
// this will pick a random float ranging form 0-1 basically a float
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
// random number ranging 
// note you can change the range of the number
console.log(Math.floor(Math.random() * 10) +1);


//ch6 code challenge

// 
const anyname = "Wisdom"
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));
console.log(anyname.charAt(Math.floor(Math.random() * anyname.length)));

// ch7 Conditionals: If statments


// syntax
// if (condition) {
//     // run some code
// } else{
//     // run some diffrent code
// }

let testScore = "19";
let collegeStudent = "true"
let grade;

if (testScore >= 90){
  grade = "A"
} else if (testScore >= 80){
    grade = "B";
}
 else if (testScore >= 70){
    grade = "C";
}
else if (testScore >= 60){
    grade = "D";
}
else{
 if(collegeStudent){
   grade = "U";
 }
}
console.log(grade)



// rock Paper Scissors Game with conditionals syntax

// if(playerOne === playerTwo){
//     // tie game
// } else if (playerOne === "rock"){
//      if (computer === "paper"){
//         // computer wins
//      } else{
//     //    player One wins
//      }
// }
//  else if (playerOne === "rock"){
//      if (computer === "paper"){
//         // computer wins
//      } else{
//     //    player One wins
//      }
// }
//   else if (playerOne === "paper"){
//      if (computer === "scissors"){
//         // computer wins
//      } else{
//     //    player One wins
//      }
// } else {
//     if (computer === "rock"){
//         // computer wins
//      } else{
//     //    player One wins
//      }
// }
 
// ch8 
// Switch Statements
//  this are used to make decisions in javascript sometimes
// syntax
switch (Math.floor(Math.random() * 5) +1) {
    case 1:
    console.log(1)    
    break;

        case 2:
            console.log(2)
            break;

case 3:
    console.log(3)
    break;

    default:
        console.log("No Match");
}


// rock paper and scissors game with switch statements
let playerOne = "paper";
let playerTwo = "scissors";

switch (playerOne) {
  case playerTwo:
    console.log("Tie Game!");
    break;

    case "rock":
        if (playerTwo === "paper"){
    console.log("playerTwo Wins!");
        } else{
             console.log("playerOne wins!")
        }
        break;

    case "paper":
        if (playerTwo === "scissors"){
    console.log("playerTwo Wins!");
        } else{
             console.log("playerOne wins!")
        }
        break;

        default:         
        if (playerTwo === "rock"){
    console.log("playerTwo Wins!");
        } else{
             console.log("playerOne wins!")
        }
        break; 
} 


// ternary operation

// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken pepper soup";
let isCustomerBanned = false;
let soupAcess = isCustomerBanned ? "Sorry no soup for you!"
 : soup
? "Yes we have soup today." 
: "Sorry no soup today";
console.log(soupAcess)


// ch10