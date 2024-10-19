function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowestIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestIndex]) {
                lowestIndex = j
            }
        }
        
        if(i !== lowestIndex) {
            [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]]
        }
    }
    return arr
}

selectionSort([34,22,10,19,17])