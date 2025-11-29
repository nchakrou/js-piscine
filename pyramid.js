function pyramid(str,num){
    let res = ""
    let s = 1
    for (let i = 1 ;i<=num;i++){
        if (i!= 1){
            res+="\n"
        }
        res += " ".repeat((num-i)*str.length)+str.repeat(s) 
        s+=2
    }
    return res
}
console.log(pyramid("{",12))