function longWords(arr) {
    for (let i of arr) {        
        if ( i.length < 5) {  
            return false
        }

    }
    return true
}
function oneLongWord(arr) {
    console.log("o", arr);
    for (let i of arr) {
        if (i.length >= 10) {
            return true
        }
    }
    return false
}
function noLongWords(arr) {
    console.log("n", arr);

    for (let i of arr) {
        if (i.length > 7) {
            return false
        }

    }
    return true
}

