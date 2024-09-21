function validAnagram(string1, string2){
    // add whatever parameters you deem necessary - good luck!
    if (string1.length !== string2.length) {
       return false; 
    }
    
    let string1obj = {}
    
    for (let i = 0; i < string1.length; i++) {
        
        let currentElement = string1[i]
        string1obj[currentElement] = ++string1obj[currentElement] || 1  
        
    }
    
    let string2obj = {}
    
    for (let i = 0; i < string2.length; i++) {
        
        let currentElement = string2[i]
        string2obj[currentElement] = ++string2obj[currentElement] || 1   
        
    }
    
    for (let key in string1obj) {
        
        if (!string2obj.hasOwnProperty(key)) {
            return false
        }
        
        if (string1obj[key] !== string2obj[key]) {
            return false
        }
        
    }
    
    return true;
    
  }
  

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true