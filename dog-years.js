function dogYears(name, age) {
  let Years = (age / 31557600) * 7;
  switch (name) {
    case "mercury":
      Years /= 0.2408467;
    case "venus":
      Years /= 0.61519726;
    case "mars":
      Years /= 1.8808158;
    case "jupiter":
      Years /= 11.862615;
    case "saturn":
      Years /= 29.447498;
    case "uranus":
      Years /= 84.016846;
    case "neptune":
      Years /= 164.79132;
  }
  return Math.round(Years * 100) / 100;
}
