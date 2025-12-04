function firstDayWeek(number, year) {
  const date = new Date(year + "-01-01");
  date.setDate(date.getDate() + (number - 1) * 7);
  while (date.getDay() > 1) {
    date.setDate(date.getDate() - 1);
  }
  if (date.getFullYear() < year) {
    return `01-01-${year}`;
  }
  let dd = String(date.getDate());
  if (date.getMonth() < 10) {
    dd = "0" + dd;
  }
  let mm = String(date.getMonth() + 1);
  if (date.getDate() < 10) {
    mm = "0" + mm;
  }
  return `${dd}-${mm}-${year}`;
}
