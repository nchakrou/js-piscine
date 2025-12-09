function fusion(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }


    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b];
    }
    if (isObj(a) && isObj(b)) {
        let res = {}
        for (let i in a) {
            if (i in b) {
                res[i] = fusion(a[i], b[i])
            } else {
                res[i] = a[i]
            }
            for (let i in b) {
                if (!(i in a)) {
                    res[i] = b[i];

                }
            }
        }
        return res
    }
    return b
}


function isObj(x) {
    return x && typeof x === "object" && !Array.isArray(x);
}



