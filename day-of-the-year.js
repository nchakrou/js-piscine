function dayOfTheYear(date) {
  let newday = new Date(`${date.getFullYear()}-01-01`);
  var count = 0;
  while (newday <= date) {
    newday.setDate(newday.getDate() + 1);
    count++;
  }
  if (count == 0){
    count++
  }
  return count;
}
console.log(dayOfTheYear(new Date('0001-01-01')));

