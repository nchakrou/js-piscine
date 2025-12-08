import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const l = document.createElement("style");
  for (let i of colors) { 
        l.textContent += `.${i} { background: ${i};}\n`;
  }
  document.head.append(l);
}
export function generateColdShades() {
    
    for (let v of colors){
        if (/aqua|blue|turquoise|green|cyan|navy|purple/.test(v)){
        let i=document.createElement("div")
        i.classList.add(v);
        i.textContent=v
        document.body.append(i)
        }
    }
}

export function choseShade(shad) {
    let y = document.body.querySelectorAll("div")
    
    for (let v of y){
        let test = v.classList
       
        v.classList.remove(test[0])
        v.classList.add(shad)

    }
}
