function longWords(arr) {
  return  arr.every((n)=>n.length>=5)
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
