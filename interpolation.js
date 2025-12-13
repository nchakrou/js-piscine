function interpolation({ step, start, end, callback, duration }) {
    const amountToAdd = (end - start) / step
    const delay = duration / step
    let count = 0
    const timer = setInterval(() => {
        if (count < step) {
            const y = delay * (count + 1)
            callback([start, y])
        
            start += amountToAdd
            count++
        } else {
            clearInterval(timer)
        }
    }, delay)
}
