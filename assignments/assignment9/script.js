let quotes = ["If you dream it, you can do it", "Do what you can, with what you have, where you are", "Trust yourself you can do it and get it", "It's hard to be the person who never gives up", "I invent, transform, create and destroy for a living"];
let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]

let count = 0;

const newQuote = () => {
    let read = document.getElementById("quotes-p");

    read.innerHTML = quotes[count];
    count++;

    if(count >= quotes.length){
        count = 0;
    }
}

const drawRainbow = () => {
    let area = document.getElementById("input-row");
    let i = 0;
    const root = document.querySelector(":root");

    const addRow = () => {

        if(i<colors.length){
            let para = document.createElement("p");
            para.textContent=colors[i];
            para.style.backgroundColor = colors[i];
            para.style.color = colors[i];
            area.appendChild(para);
            i++
            setTimeout(addRow,500)
        }
        else{
            root.style.setProperty("--opa","1");
        }
   }
   addRow();
}


window.onload = () => {
    setInterval(newQuote, 1000);
    document.getElementById("draw-rainbow").onclick = drawRainbow;
}