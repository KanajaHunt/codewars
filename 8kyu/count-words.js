// Can you implement a function that will return number of words in a string?
// You have to ensure that spaces in string is a whitespace for real.
// Let's take a look on some examples:
// countWords("Hello"); // returns 1 as int 
// countWords("Hello, World!") // returns 2 
// countWords("No results for search term `s`") // returns 6 
// countWords(" Hello") // returns 1 
// ... and so on

// solution
/* 
\s : Matches a single white space character 
[^]: It matches anything that is not enclosed in the brackets. 
[^\s] : together it matches anything that is not a single white space character​. 
/g : global search
*/ 

function countWords(str) { 
    return (str.match(/[^\s]+/g) || []).length; 
    } 