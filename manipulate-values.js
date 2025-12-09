function filterValues(obj,fn){
    let res ={};
    for (let i in obj){
        if (fn(obj[i])){
            res[i]=obj[i]
        }
    }
    return res
}
function mapValues(obj,fn){
    let res ={};
    for (let key in obj){
        res[key]=fn(obj[key])
    }
    return res
}
function reduceValues(obj,fn){
       let acc = 0
    for (let key in obj){
        acc=fn(acc,obj[key])
    }
    return acc
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37