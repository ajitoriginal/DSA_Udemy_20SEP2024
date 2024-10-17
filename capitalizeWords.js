/*
Write a recursive function called capitalizeWords. Given an array of words, 
return a new array containing each word capitalized.
*/

function capitalizeWords (arr) {
    if(arr.length == 0) return []
    else if (arr.length == 1) return [arr[0].toUpperCase()]
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
  // add whatever parameters you deem necessary - good luck!
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']