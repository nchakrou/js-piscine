function filterEntries(obj, fn) {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (fn(key, value)) {
      res[key] = value;
    }
  }
  return res;
}
function mapEntries(obj, fn) {
  const res = {};
  for (let [key, value] of Object.entries(obj)) {
    const [newkey, newvalue] = fn([key, value]);
    res[newkey] = newvalue;
  }
  return res;
}
function reduceEntries(obj, fn, acc = 0) {
  for (let [key, value] of Object.entries(obj)) {
    acc = fn(acc,key, value);
  }
  return acc;
}

function totalCalories(obj) {
  let res =0
for (let key in obj){
  res+=(obj[key]/100)*nutritionDB[key].carbs
}
return res

}
function lowCarbs(obj){

 return filterEntries(obj,(a,b)=>(b/100)*nutritionDB[a].carbs<50)
  
}
function cartTotal(obj){
  let res ={};
for (let key1 in obj){
  let a = obj[key1]/100
  res[key1]={}
  for (let key2 in nutritionDB[key1]){
   res[key1][key2]=nutritionDB[key1][key2]*a

    
  }
}
return res
}
//
const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

console.log("Total calories:");
console.log(totalCalories(groceriesCart));
console.log("Items with low carbs:");
console.log(lowCarbs(groceriesCart));
console.log("Total cart nutritional facts:");
console.log(cartTotal(groceriesCart));
/*Total calories:
2112.2
Items with low carbs:
{ oil: 20 }
Total cart nutritional facts:
{
  orange: {
    calories: 245,
    protein: 4.5,
    carbs: 65,
    sugar: 45,
    fiber: 1,
    fat: 0.5
  },
  oil: {
    calories: 9.6,
    protein: 0,
    carbs: 0,
    sugar: 24.6,
    fiber: 0,
    fat: 30.2
  },
  sugar: {
    calories: 1857.6,
    protein: 0,
    carbs: 480,
    sugar: 480,
    fiber: 0,
    fat: 0
  }
}
  */
