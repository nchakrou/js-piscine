const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "secondMonday",
  "secondTuesday",
  "secondWednesday",
  "secondThursday",
  "secondFriday",
  "secondSaturday",
  "secondSunday",
];

function addWeek(date) {
  const Day = 24 * 60 * 60 * 1000;
  const days = (date - new Date("0001-01-01")) / Day;
  const i = days % 14;
  return week[i];
}

function timeTravel({ date, hour, minute, second }) {
  date.setHours(hour, minute, second);
  return date;
}
