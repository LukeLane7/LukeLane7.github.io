const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide");
    document.getElementById("main-nav").classList.toggle("hide");
}

const toggleEx1 = () => {
    document.getElementById("exercise1P").classList.toggle("hide");
    document.getElementById("exercise2P").classList.toggle("hide");
}
const compareAges = () => {
    const name1 = document.getElementById("name1").value;
    const age1 = document.getElementById("age1").value;
    const name2 = document.getElementById("name2").value;
    const age2 = document.getElementById("age2").value;
    const name3 = document.getElementById("name3").value;
    const age3 = document.getElementById("age3").value;
    const message = document.getElementById("message");


    if(age1>age2&&age1>age3&&age2>age3){
        message.innerHTML = "Oldest to youngest: " +name1+", "+name2+", "+name3;
    }
    else if (age2>age1&&age2>age3&&age1>age3) {
        message.innerHTML = "Oldest to youngest: " +name2+", "+name1+", "+name3;
    }
    else if(age3>age1&&age3>age2&&age1>age2){
        message.innerHTML = "Oldest to youngest: " +name3+", "+name1+", "+name2;
    }
    else if (age2>age1&&age2>age3&&age1<age3) {
        message.innerHTML = "Oldest to youngest: " +name2+", "+name3+", "+name1;
    }
    else if(age3>age1&&age3>age2&&age1<age2){
        message.innerHTML = "Oldest to youngest: " +name3+", "+name2+", "+name1;
    }
    else{
    message.innerHTML = "Oldest to youngest: " +name1+", "+name3+", "+name2;
    }
    

    
}
const toggleEx2 = () => {
    document.getElementById("exercise2P").classList.toggle("hide");
    document.getElementById("exercise1P").classList.toggle("hide");
}

const fundsMade = () => {
    const funds = document.getElementById("funds").value;
    const root = document.querySelector(":root");

    if(funds>=0&&funds<2500){
        root.style.setProperty("--red","red 25%")
        root.style.setProperty("--white","white 0%")
    }
    else if(funds>=2500&&funds<5000){
        root.style.setProperty("--red","red 25%")
        root.style.setProperty("--white","white 0%")
    }
    else if(funds>=5000&&funds<7500){
        root.style.setProperty("--red","red 50%")
        root.style.setProperty("--white","white 0%")
    }
    else if(funds>=7500&&funds<10000){
        root.style.setProperty("--red","red 75%")
        root.style.setProperty("--white","white 0%")
    }
    else{
        root.style.setProperty("--red","red 100%")
        root.style.setProperty("--white","red 0%")
    }
}

window.onload = () => {
    document.getElementById("exercise2P").classList.toggle("hide");
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("exercise1").onclick = toggleEx1;
    document.getElementById("exercise2").onclick = toggleEx2;
    document.getElementById("compareAges").onclick = compareAges;
    document.getElementById("funds-button").onclick = fundsMade;
}