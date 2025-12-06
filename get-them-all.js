export const getArchitects = ()=>{
    const a = Array.from(document.getElementsByTagName("a"))
    const b = Array.from(document.body.querySelectorAll("*:not(a)"))
    return [a,b]
}
export const getClassical = ()=>{
const a = Array.from(document.getElementsByClassName("classical"))
const b = Array.from(document.body.querySelectorAll("*:not(.classical)"))
return [a,b]
}
export const getActive = ()=>{
const a = Array.from(document.querySelectorAll(".classical.active"))
const b = Array.from(document.querySelectorAll("a:not(.classical.active)"))
return [a,b]
}
export const getBonannoPisano = ()=>{
const a = [document.getElementById("BonannoPisano")]
const b = Array.from(document.body.querySelectorAll("a.classical.active:not(#BonannoPisano)"))
return [a,b]
}