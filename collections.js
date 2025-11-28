const arrToSet = (n) => new Set(n);
const arrToStr = (n) => n.join("");
const setToArr = (n) => [...n];
const setToStr = (n) => [...n].join("");
const strToArr = (n) => n.split("");
const strToSet = (n) => new Set(n.split(""));
const mapToObj = (n) => {
  const obj = {};
  for (let [key, value] of n) {
    obj[key] = value;
  }
  return obj;
};

const objToArr = (n) => Object.values(n);
const objToMap = (n)=>{
    const mapa = new Map()
    for (let key in n){
        mapa.set(key,n[key])
    }
    return mapa
}
const arrToObj= (n)=>{
    let obj ={}
    for (let index in n){
        obj[index]=n[index]
    }
    return obj
}
const strToObj = (n)=>{
    let obj = {}
    for (let i = 0 ;i<n.length;i++){
        obj[i]=n[i]
    }
    return obj
}
function superTypeOf(n){
    if (n ===null) {
        return "null"
    }
    if (Array.isArray(n)){
        return "Array"
    }
    if (n instanceof Map){
        return "Map"
    }
    if (n instanceof Set){
        return "Set"
    }
  
    return typeof n
}
