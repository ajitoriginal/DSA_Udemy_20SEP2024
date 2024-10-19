/*
Write a recursive function called flatten which accepts an array 
of arrays and returns a new array with all values flattened.
*/

function flatten(input){
    let result = []
       for (let val of input) {
            if(val.length) {
                result.push(...flatten(val))
            } else {
                result.push(val)
            }
        }
    return result
}