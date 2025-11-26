function dogYears(name, age) {
  let Years = (age / 31557600) * 7;
  switch (name) {
    case "mercury":
      Years /= 0.2408467;
      break;

    case "venus":
      Years /= 0.61519726;
      break;

    case "mars":
      Years /= 1.8808158;
      break;

    case "jupiter":
      Years /= 11.862615;
      break;

    case "saturn":
      Years /= 29.447498;
      break;

    case "uranus":
      Years /= 84.016846;
      break;

    case "neptune":
      Years /= 164.79132;
      break;
  }
  return Math.round(Years * 100) / 100;
}
console.log(dogYears("mercury", 2134835688));
