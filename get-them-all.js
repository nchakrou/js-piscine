export const getArchitects = ()=>{
    const a = Array.from(document.getElementsByTagName("a"))
    const b = Array.from(document.body.querySelectorAll(":not(a)"))
    return [a,b]
}
export const getClassical = ()=>{
const a = Array.from(document.getElementsByClassName("classical"))
const b = Array.from(document.body.getElementsByClassName(":not(classical)"))
return [a,b]
}
export const getActive = ()=>{
const a = Array.from(document.getElementsByClassName("active"))
const b = Array.from(document.getElementsByClassName("*:not(active)"))
return [a,b]
}
export const getBonannoPisano = ()=>{
const a = Array.from(document.getElementById("BonannoPisano"))
const b = Array.from(document.body.querySelectorAll(".classical.active:not(#BonannoPisano)"))
return [a,b]
}