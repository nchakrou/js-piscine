
function filterKeys(obj, fn) {
    let res = {}
    for (let k in obj) {
        if (fn(k)) {
            res[k] = obj[k]
        }
    }
    return res
}
function mapKeys(obj, fn) {
    let res = {}

    for (let [k, v] of Object.entries(obj)) {
        res[fn(k)] = v
    }
    return res
}
function reduceKeys(obj, fn, acc) {
    let first = true
    if (acc == undefined) {
        first = false
    }
    for (let k in obj) {
        if (!first) {
            acc = k
            first = true
            continue
        }
        acc = fn(acc, k)
    }
    return acc
}
