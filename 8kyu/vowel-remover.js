// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// solution
// "[aeiou]" tells the replace function to look for any of these characters 

// and "gi" are flags that tells the function to look for match over the entire string 

// (will otherwise break at the first match), this is the "g" flag. 

// And the "i" flag tells it to match case insensitively. So, it would also match, A , E and so on. 

function shortcut(string){ 
    return string.replace(/[aeiou]/g,' ') ;
    }
    