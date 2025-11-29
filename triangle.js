function triangle(str,num){
    let res =""
    for (let i = 1 ;i<=num;i++){
        if (i!=1){
            res+="\n"
        }
        res += str.repeat(i)
    }
    return res
}
