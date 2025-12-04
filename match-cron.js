function matchCron(cron, date) {
  let dt = [];
  dt.push(
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay()
  );
  if (date.getDay() === 0) {
    dt[4] = 7;
  }
  console.log(dt[4]);
  const cr = cron.split(" ");
  for (let c in cr) {
    if (cr[c] != "*") {
      if (cr[c] != dt[c]) {
        return false;
      }
    }
  }
  return true;
}
