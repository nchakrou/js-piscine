function filterEntries(obj, fn) {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (fn([key, value])) {
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
    acc = fn(acc, [key, value]);
  }
  return acc;
}

function totalCalories(obj) {
  let res = 0;
  for (let key in obj) {
    res += (obj[key] / 100) * nutritionDB[key].calories;
  }
  return res;
}
function lowCarbs(obj) {
  return filterEntries(obj, ([a, b]) => (b / 100) * nutritionDB[a].carbs < 50);
}
function cartTotal(obj) {
  let res = {};
  for (let key1 in obj) {
    let a = obj[key1] / 100;
    res[key1] = {};
    for (let key2 in nutritionDB[key1]) {
      res[key1][key2] = Math.round(nutritionDB[key1][key2] * a);
    }
  }
  return res;
}
