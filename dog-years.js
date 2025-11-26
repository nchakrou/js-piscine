function dogYears(name, age) {
  const Years = (age / 60 / 60 / 24 / 365) * 7;
  switch (name) {
    case "mercury":
      return Years / 0.2408467;
    case "venus":
      return Years / 0.61519726;
    case "mars":
      return Years / 1.8808158;
    case "jupiter":
      return Years / 11.862615;
    case "saturn":
      return Years / 29.447498;
    case "uranus":
      return Years / 84.016846;
    case "neptune":
      return Years / 164.79132;
  }
  return Years;
}
