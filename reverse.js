/*
Write a recursive function called reverse which accepts a string 
and returns a new string in reverse.
*/

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length) {
        return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
    } else {
        return ''
    }
  }