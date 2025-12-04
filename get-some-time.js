function firstDayWeek(number = 50, year = "2021") {
  const date = new Date(year + "-01-01");
  date.setDate(date.getDate() + (number - 1) * 7);
  while (date.getDay() > 1) {
    date.setDate(date.getDate() - 1);
  }
  
  console.log(date.getMonth());
  if (date.getDate()<10){
    return `0${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  }
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}
console.log(firstDayWeek());
