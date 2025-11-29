function reverse(arg){
    let res = "";
    if (typeof arg ==="string"){
        for (let r of arg){
            res = r+res
        }
        return res
    }
    res = []
    
        for (let i = arg.length-1 ;i>=0;i--){
            res.push(arg[i])
        
        }
        return res
}
