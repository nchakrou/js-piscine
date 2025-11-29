function chunk(arr,num){
    let res =[];
    if (num == 0){
        return arr
    }
for (let i = 0;i<arr.length;i+=num){
    if (i+num>arr.length){
    res.push(arr.slice(i,arr.length))
    break
    }
    res.push(arr.slice(i,i+num))
}
return res
}
