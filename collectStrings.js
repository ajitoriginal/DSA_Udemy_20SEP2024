/*
Write a function called collectStrings which accepts an object 
and returns an array of all the 
values in the object that have a typeof string
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj) {
    let result = []
    let keys = Object.keys(obj)
    for(let key of keys) {
        if(typeof(obj[key]) == 'string') {
            result.push(obj[key])
        } else {
            result.push(...collectStrings(obj[key]))
        }
    }
    return result
}
collectStrings(obj) // ["foo", "bar", "baz"])