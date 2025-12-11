let words = ["i", "you", "he", "she", "it", "they", "we"]
function pronoun(str) {
    let res = {}
    const sp = str.split(/[ \n.,]/)
    for (let i in sp) {
        let w = sp[i].toLowerCase()
        if (words.includes(w)) {
            let next = sp[+i + 1]

            if (res[w] === undefined) {
                res[w] = { word: [], count: 0 }
            }
            if (!words.includes(next) && next) {

                res[w].word.push(next)
                res[w].count++
            } else {
                res[w].count++

            }

        }
    }
return res
}