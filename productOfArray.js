/*
Write a function called productOfArray which takes in an array 
of numbers and returns the product of them all.
*/

function productOfArray(arr) {
    if(arr.length) {
        return arr[0] * productOfArray(arr.slice(1))
    } else {
        return 1
    }
}