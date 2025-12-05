function citiesOnly(arr) {
  return arr.map((k) => k.city);
}

function upperCasingStates(arr) {
  let res = arr.map((f) =>
    f
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  );

  return res;
}

function fahrenheitToCelsius(arr) {
  let res = arr.map((m) => {
    let k = m.split("°");
    k[0] = Math.floor((k[0] - 32) * (5 / 9));
    k[1] = "C";

    return k.join("°");
  });
  return res;
}
function trimTemp(arr) {
  let res = arr.map((obj) => {
    obj.temperature = obj.temperature.replaceAll(" ", "");
    return obj;
  });
  return res;
}
function tempForecasts(arr) {
  let res = arr.map((n) => {
    let temp = n.temperature.replaceAll(" ", "").split("°");
    temp[0] = Math.floor((temp[0] - 32) * (5 / 9));
    let tempirat = temp[0] + "°" + "Celsius ";
    let c = n.city;
    let cit = c[0].toUpperCase() + c.slice(1);
    let s = n.state.split(" ");
    let stat = s.map(l => l[0].toUpperCase() + l.slice(1))
    return tempirat + "in " + cit + ", " + stat.join(" ");
  });
  return res;
}

