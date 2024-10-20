/*
Write a function called binarySearch which accepts a sorted 
array and a value and returns the index at 
which the value exists. Otherwise, return -1.
*/

function binarySearch(arr, val) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if (val == arr[mid]) return mid
        if (val > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}