// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My answer
function findAverage(array) { 
    if (!array.length) return 0; 
    return array.reduce((acc, c) => acc + c, 0) / array.length 
}