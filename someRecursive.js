/*
Write a recursive function called someRecursive which accepts an array
 and a callback. The function returns true if a single value in the array 
 returns true when passed to the callback. Otherwise it returns false.
*/

function someRecursive(arr, callBack){
    // add whatever parameters you deem necessary - good luck!
    for(let val of arr) {
        if(callBack(val)) {
            return true
        }
    }
    
    return false
  }