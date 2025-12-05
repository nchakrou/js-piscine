function map(arr,fn){
    let res =[];
    for (let i =0;i<arr.length;i++){
        res.push(fn(arr[i],i,arr))
    }
    return res
}
function flatMap(arr,fn){
    let res =[];
    for (let i = 0 ;i<arr.length;i++){
        let temp = fn(arr[i],i,arr)
        if (Array.isArray(temp)){
            res.push(...temp)
        }else{
            res.push(temp)
        }

    }
    return res
}