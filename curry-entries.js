function defaultCurry(obj1) {
  return function (obj2) {
    let res = {};
    for (let [k, v] of Object.entries(obj1)) {
      if (k in obj2) {
        res[k] = obj2[k];
        continue
    }
    res[k] = v;
}
for (let [k, v] of Object.entries(obj2)) {
    if (!obj1[k]){
        res[k]=v
    }
}
return res
  };
}
function mapCurry(fn){
    return function (obj){
        let res ={}
        for (let [k,v] of Object.entries(obj)){
            let [key,value]= fn([k,v])
            res[key]=value
        }
        console.log(res);
        
    }
}
function reduceCurry(fn){
    return function (obj){
        let acc = 0
        for (let [k,v] of Object.entries(obj)){
            acc = fn(acc,[k,v])
        }
        console.log(acc);
        
    }
}
function filterCurry(fn){
    return function (obj){
        let res ={}
        for (let [k,v] of Object.entries(obj)){
            if (fn([k,v])){
                res[k]=v
            }
        }
        console.log(res);
    }
}
const force = filterCurry(([_, value]) => value.isForceUser)

function reduceScore (obj, value){
    return reduceCurry((acc,[_, val]) => acc + val.shootingScore + val.pilotingScore)(force(obj),value)
}
    

function filterForce (obj) {
return filterCurry(([_, value])=> value.shootingScore >= 80)(force(obj))
} 

function mapAverage (obj) {
 return mapCurry(([key, value])=> {
    let val = {...value, averageScore: (value.shootingScore + value.pilotingScore) / 2}
    return [key, val]
})(obj)
} 

// output
//{ str: 'string', arr: [1, 2] }
reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)
// output
//6
// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
/*/ output
{
  lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
*/
