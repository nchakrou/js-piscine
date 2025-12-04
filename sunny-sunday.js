function sunnySunday(date) {
const def = new Date("0001-01-01")
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = 24*60*60*1000
  let day = (date.getTime()-def.getTime())/d

 return days[day%6] 
}

