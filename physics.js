const isnum = (n) => typeof n === "number" && !isNaN(n)&&n!==0;

function getAcceleration(obj){
    if (isnum(obj.f) && isnum(obj.m)){
        return obj.f /obj.m
    }
    if (isnum(obj.Δv) && isnum(obj.Δt)){
        return obj.Δv /obj.Δt
    }
    if (isnum(obj.d) && isnum(obj.t)){
        return (2*obj.d) /(obj.t*obj.t)
    }
    return "impossible"
}