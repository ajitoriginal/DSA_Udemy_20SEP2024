function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < num || !num) return null
    
    let maxSum = 0
    let tempSum = 0
    
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
        tempSum += arr[i]
    }
    
    
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i-num]
        maxSum = Math.max(tempSum, maxSum)
    }
    
    return maxSum;
  }