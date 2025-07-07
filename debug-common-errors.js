/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// commenting out incorrect code so that I can run program
// console.log("Welcome to the bootcamp


// What’s Wrong?
/* --- MY ANSWER ---
This is a syntax error. The code is missing a closing quotation mark, closing parenthesis, and semicolon.
Correct code below: 
*/ 
console.log("Welcome to the bootcamp.");

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// commenting out incorrect code 
/* let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
*/

// What’s Wrong?
/* --- MY ANSWER ---
This is a runtime error. The code is syntactically correct, but the string "eight" cannot be doubled. 
It needs to be converted to a number before it will run properly. Correct code below: 
*/
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// commenting out incorrect code
/* 
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false
*/

// What’s Wrong?
/* --- MY ANSWER ---
This is a logic error. When the code is supposed to indicate a number not being a prime number, it returns true.
Similarly, outside of the for loop, the code returns false when it should be indicating that the number is prime.
Simply modifying the code by reversing these two true/false results will fix it. Correct code below: 
*/
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false