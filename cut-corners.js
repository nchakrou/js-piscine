function ceil(n){
    return  trunc(n)+1
}
function floor(n){
    return  trunc(n)-1
}
function round(n){
    if ( modulo(n,1)>=5){
        return ceil(n)
    }
    return floor(n)
}

function trunc(n) {
    return n-(modulo(n,1))
}


console.log(modulo(3.5,1))

function multiply(a,b){
    if (a==0||b==0){
        return 0
    }
    if (b<0){
        return multiply(-a,-b)
    }
    return a+=multiply(a,b-1)
} 
function divide(a,b){
    if (a==0||b==0){
        return 0
    }
    if (a<0){
        return -(divide(-a,b))
    }
    if (b<0){
        return -(divide(a,-b))
    }
    if (a>=b){
        return 1 + divide(a - b, b)
    }
    return 0
}
function modulo(a,b){
     return a - multiply(divide(a,b),b)
}
