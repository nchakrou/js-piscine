const repeat = (str,n)=>n>1?str + repeat(str,n-1):n==0?"":str
console.log(repeat('a', 0))