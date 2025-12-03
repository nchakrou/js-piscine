function isValid(date){
    return date !=='' && !isNaN(date)
}
function isAfter(date1,date2){
    return date1>date2
}
function isBefore(date1,date2){
    return date2>date1
}
function isFuture(date){
    return isValid(date) && date > new Date()
}
function isPast(date){
    return isValid(date) && date < new Date()
}