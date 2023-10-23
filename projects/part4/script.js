let count = 0;
const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide");
    const root = document.querySelector(":root");

    if(count%2==0){
        root.style.setProperty("--toggleNav","275px");
    }
    else if(count%2==1){
        root.style.setProperty("--toggleNav","500px");
    }
    count++ 
}

const submitEmail = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hide");
    

}



window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("email-form").onsubmit = submitEmail;
}