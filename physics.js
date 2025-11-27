const isnum = (n) => typeof n === "number" && !isNaN(n)&&n!==0;

function getAcceleration(obj){
    if (isnum(obj.f) && isnum(obj.m)){
        return obj.f /obj.m
    }
    if (isnum(obj.Δv) && isnum(obj.Δt)){
        return obj.Δv /obj.Δvt
    }
    if (isnum(obj.d) && isnum(obj.t)){
        return (2*obj.v) /(obj.Δvt*obj.Δvt)
    }
    return "impossible"
}