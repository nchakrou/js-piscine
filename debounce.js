function debounceTrailing(fn, delay) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}


function opDebounce(fn, wait, leading = false) {
    let timer
    
    return (...args) => {
        const isFirstCall = !timer
         clearTimeout(timer)
        
         timer = setTimeout(() => {
            timer = null
        }, wait)
        
        if (leading && isFirstCall) {
            fn(...args)
        }
    }
}