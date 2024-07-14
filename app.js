//practice pb 6.1

function add() {
  let num1 = parseFloat(prompt('Enter the first number'))
  let num2 = parseFloat(prompt('Enter the second number'))
  let sum = num1 + num2;
  return sum;
}
let result1= add()
result1 = console.log("the sum is " + result1)
//second call
let a = 6;
let b = 9;
let result2 = add(6, 9)
result2 = console.log("the sum of a and b is " + result2)

//practice pb 6.2
let words = ["amazing", "awesome", "perfect", "superb", "gorgeous", "pleasent"]
function name() {
  let input = prompt('enter a name')
  let ranWord = words[Math.floor(Math.random() * words.length)]
  console.log('the word is ' + ranWord);
}

// Step 5: Invoke the function
name();
   //p.p 6.3
function calculate() {
  let num1 = parseFloat(prompt('enter the first number: '))
  let num2 = parseFloat(prompt('enter the second number: '))
  let operator = prompt('enter an operator (+, -,*,/): ')
  switch (operator) {

    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    case '/':
      return (num1 / num2);
    default:
      alert("Invalid operator!");
  }
}
let result = calculate()
console.log("the result is " + result)


//Practice problem 4.5
let prize = parseInt(prompt('enter a number between 0 to 10'));
let output = "My Selection: ";
let msg;

switch (prize) {
  case 0:
    msg = 'you win a watch'
    break;
  case 1:
    msg = 'you win a bag'
    break;
  case 2:
    msg = 'you win a teddy'
    break;
  case 3:
    msg = 'you win an ipad '
    break;
  case 4:
    msg = 'you win a sneakers'
    break;
  case 5:
    msg = 'you win an iphone'
    break;
  case 6:
    msg = 'you win a book'
    break;
  case 7:
    msg = 'you win a toolbox'
    break;
  case 8:
    msg = 'you win a bag'
    break;
  case 9:
    msg = 'you win a laptop'
    break;
  case 10:
    msg = 'you win a t-shirt'
    break;
  default:
    msg = 'invalid selection'
}
output += prize + "  " + msg;
alert(output);

//number guessing game

let numGuess = parseInt(prompt('Guess the Number'));
let output1;
const number = 54;
if (numGuess === number) {
  output1 = "your number is equal to " + number;
}
else if (numGuess > output1) {
  output1 = "your number is greater than" + number;
}
else {
  output1 = "your number is less than  " + number;
}
alert(output1)

// freind checker game
let friend = prompt('Enter a name')
let frndName;
switch (friend) {
  case 'ava':
    frndName = "yes!  " + friend + " is your friend"
    break;
  case 'jules':
    frndName = "yes!  " + friend + " is your friend"
    break;
  case 'alex':
    frndName = "yes!  " + friend + " is your friend"
    break;
  default:
    frndName = friend + "is not your friend"
}
alert(frndName)

//Rock paper game

let choice = ["rock", "paper", "scissor"];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let pSelect = choice[player];
console.log(pSelect);
let cSelect = choice[computer];
console.log(cSelect);
let message = "Player choice is:  " + player + "\n Computer choice is: " + computer;

if (player === computer) {
  message += "Its a tie!"
}
else if (player === 0 && computer == 2) {
  message += "Player wins"

}
else if (player === 1 && computer == 0) {
  message += "Player wins"
}
else if (player === 2 && computer == 1) {
  message += "Player wins!"
}

else {
  message += "Computer wins!"
}
alert(message);