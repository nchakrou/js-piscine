function firstDayWeek(number, year) {
  const date = new Date(1,0,1);
  date.setFullYear(parseInt(year))
  
  const d = date.getDay()
 const days=[6,0,1,2,3,4,5]
  date.setDate(date.getDate() +( (number -1 ) * 7)-days[d]);

  if (date.getFullYear() < year) {
    return `01-01-${year}`;
  }
  let dd = String(date.getMonth() + 1);
  if (0 + dd < 10) {
    dd = "0" + dd;
  }
  let mm = String(date.getDate());
  if (date.getDate() < 10) {
    mm = "0" + mm;
  }
  return `${mm}-${dd}-${year}`;
  
}


