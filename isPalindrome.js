/*
Write a recursive function called isPalindrome which returns true if 
the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    
    let left = 0, right = str.length - 1
    
    while(left < right) {
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    
    return true
  }