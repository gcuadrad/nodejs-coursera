var rect = require('./rectangle');
var math = require('./math');
var palindrome = require('./palindrome');

function solveRect(l,b) {
  console.log(`Solving for rectable with l = ${l} and b = ${b}`);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(`ERROR: ${err.message}`);
    } else {
      console.log(`The area of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.area()}`);
      console.log(`The perimeter of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.perimeter()}`);
    }
  });
  console.log('This statement is after the call to rect()');
}

// solveRect(2,3);
// solveRect(2,5);
// solveRect(0,3);


function solveMath(a, b) {
  math(a, b, (err, response) => {
    if (err) {
      console.log(`ERROR: ${err}`)
    } else {
      console.log(`The addition is ${response.addition()}`);
      console.log(`The subtraction is ${response.subtraction()}`);
    }
  });
}

// solveMath(1,2);
// solveMath(null, 3);


function isPalindrome(a) {
  palindrome(a, (err, response) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`The inverted word ${a} is ${response.reverse}.`);
      console.log(`The word is a palindrome? ${response.isPalindrome}.`);
    }
  });
}

isPalindrome('rotator');
isPalindrome('start');
isPalindrome(null);