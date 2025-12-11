const alpha = "qwertyuiopasdfghjklzxcvbnm"
const colores = ["DarkMagenta","DarkGoldenRod","DarkGray","DarkGreen","DarkCyan","AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue"]
export function compose(){

    document.body.addEventListener("keydown",(key)=>{
        if (/^[a-z]$/.test(key.key)){
            let index = 0
            while (index<alpha.length){
                if (alpha[index]==key.key){
                    break
                }
                index++
            }
            const div = document.createElement("div")
            div.classList.add("note")
            
    div.textContent=key.key
    div.style.backgroundColor=colores[index]
    document.body.append(div)
   
        }else if (key.key === "Backspace"){
            const dvs = document.querySelectorAll(".note")
            if (dvs.length!==0){
                dvs[dvs.length-1].remove()
            }
        }else if (key.key === "Escape"){
            const dvs = document.querySelectorAll(".note")
            for (let i = 0 ;i<dvs.length;i++){
                 dvs[i].remove()
            }

        }
    })
}