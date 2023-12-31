// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// For example: (Input1, Input2) --> output
// ("1", "22") --> "1221" ("22", "1") --> "1221"



// solution
function solution(a, b) { 
    return a.length < b.length ? a + b + a : b + a + b 
    }
// OR
function solution(a, b){
    return a.length > b.length
      ? b.concat(a).concat(b)
      : a.concat(b).concat(a);
  }