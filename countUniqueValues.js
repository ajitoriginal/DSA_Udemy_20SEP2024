function countUniqueValues(sortedArray){
    // add whatever parameters you deem necessary - good luck!
    if (sortedArray.length == 0) {
        return 0
    }
    
    let first = 0
    let last = 1
    
    while (last < sortedArray.length) {
        if(sortedArray[first] === sortedArray[last]) {
            last++
        } else {
            first++
            sortedArray[first] = sortedArray[last]
            last++
        }
    }
    
    return first+1
  }