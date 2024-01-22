function add(a, b) {
    return (a+b);
    }
  function subtract(a, b){
    return (a-b)
  }
  function multiply(a, b){
    return (a*b)
  }
  function divide(a, b){
    return (a/b)
  }
  function increment(n) {
    return n + 1;
}

const resultAfterIncrement = increment(5);
console.log(resultAfterIncrement); 

function decrement(n) {
    return n - 1;
}

const resultAfterDecrement = decrement(8);
console.log(resultAfterDecrement); 

function makeInt(n) {
    const parsedInt = parseInt(n, 10);
    return isNaN(parsedInt) ? NaN : parsedInt;
}

console.log(makeInt("42"));
console.log(makeInt("9.99"));
console.log(makeInt("ABC"));

function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    return isNaN(parsedFloat) ? NaN : parsedFloat;
}

console.log(preserveDecimal("3.14"));
console.log(preserveDecimal("0.123")); 
console.log(preserveDecimal("ABC")); 

