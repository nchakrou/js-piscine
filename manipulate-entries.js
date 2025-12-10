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
  return Number(res.toFixed(1));
}
function lowCarbs(obj) {
  return filterEntries(obj, ([a, b]) => (b / 100) * nutritionDB[a].carbs < 50);
}
function cartTotal(cart) {
  const res = {};
  for (let [item, grams] of Object.entries(cart)) {
    res[item] = {};
    for (let [nutrient, value] of Object.entries(nutritionDB[item])) {
      res[item][nutrient] = Number((value * grams / 100).toFixed(3));
    }
  }
  return res;
}

