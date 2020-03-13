var rect = {
  perimeter: (x,y) => (2 * (x + y)),
  area: (x,y) => (x * y),
};

function solveRect(l,b) {
  console.log(`Solving for rectable with l = ${l} and b = ${b}`);
  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimentions should be greater than 0"); 
  } else {
    const recArea = rect.area(l,b);
    console.log(`The area of the rectangle is ${recArea}`);
    const recPerim = rect.perimeter(l,b);
    console.log(`The area of the perimeter is ${recPerim}`);
  }
}

solveRect(2,3);
solveRect(2,5);
solveRect(0,3);
