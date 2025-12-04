function isFriday(date) {
    return date.getDay() === 5;
}
function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}
function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
}
function isLastDayOfMonth(date) {
    const next = new Date(date);
    next.setDate(next.getDate() + 1);
    return next.getDate() === 1;
}
console.log(isLastDayOfMonth(new Date("2020-01-31")));
