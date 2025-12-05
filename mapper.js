function map(arr,fn){
    let res =[];
    for (let i =0;i<arr.length;i++){
        res.push(fn(arr[i]))
    }
    return res
}
function flatMap(arr,fn){
    let res =[];
    for (let i = 0 ;i<arr.length;i++){
        let temp = fn(arr[i])
        if (Array.isArray(arr)){
            res.push(...temp)
        }else{
            res.push(temp)
        }

    }
    return temp
}