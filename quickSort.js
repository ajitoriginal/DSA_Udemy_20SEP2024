function quickSort(arr) {
    if(arr.length < 2) return arr
    let pivot = arr[0]
    let left = [], right = []
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [-2, -6, 4, 2, 11, 1, 0]
console.log(quickSort(arr))