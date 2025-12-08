const color =["blue","blueviolet","brown","burlywood","orange","cadetblue","forestgreen","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgreen","darkgrey","darkkhaki","darkmagenta","Byzantine","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen"]
const ulphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
export function compose(){
    document.addEventListener("keydown",(event)=>{
        let key = event.key
        if (/^[a-z]$/.test(key)){
            let index = 0
            while (index<=ulphabet.length-1 ){
                if (ulphabet[index]===key){
                    break
                }
                index++
            }

            let div =document.createElement("div")
            div.classList.add("note")
            div.textContent=key
            div.style.backgroundColor=color[index]
            document.body.append(div)

        }else if (key === "Backspace"){
            let l = document.querySelectorAll(".note")
            let node =l[l.length-1]
            if (node){
                node.remove()
            }
        }else {
            let l = document.body.querySelectorAll(".note").forEach(e=>e.remove())
            l
            
            
        }
    })
}