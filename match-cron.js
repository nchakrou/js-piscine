function matchCron(cron,date){
    let dt = [];
    dt.push(date.getMinutes(),date.getHours(),date.getDate(),date.getMonth()+1,date.getDay()+1)
const cr = cron.split(" ")
    for (let c in cr){
        if (cr[c]!="*"){
            if (cr[c]!=dt[c]){
                return false
            }
        }
    }
    return true
}
