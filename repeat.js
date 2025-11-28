const repeat = (str,n)=>n>1?str + repeat(str,n-1):str
console.log(repeat('a', 3))