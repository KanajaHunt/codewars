// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]




// Answer

// PREP
// num, +, whole
// return

function digitize(n){
    return String(n).split('').map(Number).reverse()
  }
  
  // output: 
  // reverseArray(1234) => [4321]
  // reverseArray(6739202) => [2029376]