function dayOfTheYear(date) {
  let newday = new Date(`${date.getFullYear()}-01-01`);
  var count = 0;
  if (date.getFullYear() % 4 == 0) count++;

  while (newday <= date) {
    newday.setDate(newday.getDate() + 1);
    count++;
  }
  return count;
}

