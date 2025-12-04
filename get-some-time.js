function firstDayWeek(number, year) {
  const date = new Date(year + "-01-01");
  date.setDate(date.getDate() + (number - 1) * 7);
  while (date.getDay() > 1) {
      date.setDate(date.getDate() - 1);
    }
    if (date.getFullYear() < year) {
        return `01-01-${year}`;
    }
  if (date.getDate() < 10) {
    return `0${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  }
  return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
}

