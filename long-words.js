function longWords(arr) {
  return  arr.every((n)=>n.length>=5)
}

function oneLongWord(arr) {
    return arr.some((n)=>n.length>=10)
}
function noLongWords(arr) {
    console.log("n", arr);

    for (let i of arr) {
        if (i.length >= 7) {
            return false
        }

    }
    return true
}