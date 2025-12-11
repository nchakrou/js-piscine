function longWords(arr){
    for (let i of arr){
       if (typeof i !="string"||i.length<5){
        return false
       }
        
    }
    return true
}
function oneLongWord(arr){
    for (let i of arr){
        
       if (typeof i =="string"&&i.length>=10){
        return true
       }
        
    }
    return false
}
function noLongWords(arr){
      for (let i of arr){
       if (typeof i =="string"&&i.length>=7){
        return false
       }
        
    }
    return true
}