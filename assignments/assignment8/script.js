
const fundsMade = () => {
    const funds = document.getElementById("funds").value;
    const root = document.querySelector(":root");
    let count = 0;

    if(count<funds/100){

        const timeDelay = setInterval(() => {
            const fill = "red "+count+"%";
            root.style.setProperty("--red",fill)
            root.style.setProperty("--white","white 0%")
            count++;
            if(count>=funds/100){
                clearInterval(timeDelay);
            }
        },100);
    }
}
const run = () => {
    const root = document.querySelector(":root");
    let count = 0;

    const running = setInterval(() => {
        const perc = count+"%";
        root.style.setProperty("--pad",perc)
        count++;
        if(count%2 == 1){
            root.style.setProperty("--wlk0","none");
            root.style.setProperty("--wlk1"," ");
        }
        else if(count%2 == 0){
            root.style.setProperty("--wlk0"," ");
            root.style.setProperty("--wlk1","none");
        }
        if(count==75){
            clearInterval(running);
        }
    },200);
}

window.onload = () => {
    document.getElementById("funds-button").onclick = fundsMade;
    document.getElementById("walking-man0").onclick = run;
}