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

    const form = document.getElementById("email-form");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

}
const showEmailResult = async (e) => {
    e.preventDefault();
    const result = getElementById("result");
    let response = await "Email Successfully Sent";

}



window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("email-form").onsubmit = submitEmail;
}