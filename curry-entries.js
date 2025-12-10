function defaultCurry(obj1) {
  return function (obj2) {
    let res = {};
    for (let [k, v] of Object.entries(obj1)) {
      if (k in obj2) {
        res[k] = obj2[k];
        continue;
      }
      res[k] = v;
    }
    for (let [k, v] of Object.entries(obj2)) {
      if (!obj1[k]) {
        res[k] = v;
      }
    }
    return res;
  };
}
function mapCurry(fn) {
  return function (obj) {
    let res = {};
    for (let [k, v] of Object.entries(obj)) {
      let [key, value] = fn([k, v]);
      res[key] = value;
    }
    return res;
  };
}

function reduceCurry(fn) {
  return function (obj, acc = 0) {
    for (let [k, v] of Object.entries(obj)) {
      acc = fn(acc, [k, v]);
    }
    return acc;
  };
}
function filterCurry(fn) {
  return function (obj) {
    let res = {};
    for (let [k, v] of Object.entries(obj)) {
      if (fn([k, v])) {
        res[k] = v;
      }
    }
    return res;
  };
}
const force = filterCurry(([_, value]) => value.isForceUser);

function reduceScore(obj, value) {
  return reduceCurry(
    (acc, [_, val]) => acc + val.shootingScore + val.pilotingScore
  )(force(obj), value);
}

function filterForce(obj) {
  return filterCurry(([_, value]) => value.shootingScore >= 80)(force(obj));
}

function mapAverage(obj) {
  return mapCurry(([key, value]) => {
    let val = {
      ...value,
      averageScore: (value.shootingScore + value.pilotingScore) / 2,
    };
    return [key, val];
  })(obj);
}
