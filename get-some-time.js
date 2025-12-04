function firstDayWeek(number, year) {
  const date = new Date(year + "-01-01");
  date.setDate(date.getDate() + (number - 1) * 7);
  while (date.getDay() > 1) {
      date.setDate(date.getDate() - 1);
    }
    if (date.getFullYear() < year) {
        return `01-01-${year}`;
    }
    if (date.getMonth() < 10) {
    var dd = String(date.getDate()).padStart(2, "0");
  }
  if (date.getDate() < 10) {
    var mm = String(date.getMonth() + 1).padStart(2, "0");
  }
  return `${dd}-${mm}-${year}`;
}
console.log(firstDayWeek(2,"0001"))

