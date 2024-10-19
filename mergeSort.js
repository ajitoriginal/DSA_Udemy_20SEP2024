function mergeSort(arr) {
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(arrOne, arrTwo) {
    let sortedArr = []
    while(arrOne.length && arrTwo.length) {
        if(arrOne[0] <= arrTwo[0]) {
            sortedArr.push(arrOne.shift())
        } else {
            sortedArr.push(arrTwo.shift())
        }
    }
    return [...sortedArr, ...arrOne, ...arrTwo]
}