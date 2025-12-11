let words = ["i", "you", "he", "she", "it", "they", "we"]
function pronoun(str) {
    let res = {}
    const sp = str.split(/[ \n.,]/)
    for (let i in sp) {
        if (words.includes(sp[i])) {
            let next = sp[+i + 1]

            if (res[sp[i]] === undefined) {
                res[sp[i]] = { word: [], count: 0 }
            }
            if (!words.includes(next) && next) {

                res[sp[i]].word.push(next)
                res[sp[i]].count++
            } else {
                res[sp[i]].count++

            }

        }
    }
return res
}