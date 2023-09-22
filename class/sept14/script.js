// console.log("Luke Lane");

// const add = (a,b) => a+b;

// console.log(add(5,6));
// //No need for curly brackets if return is one like like above
// const add1 = (a,b) => {return a+b};

// const square = a => a*a;
// //No need for () with one parameter
// console.log(square(5));

// const hello = () => console.log("Hello me!");

// hello();

// const helloSpecific = userName => console.log("Hello "+userName+"!");

// helloSpecific("Portia")

// const helloFullName = (firstName, lastName) => {
//     console.log("Hello "+firstName+" "+lastName+"!");
//     console.log("You are great!");
// };

// helloFullName("Lois", "Lane")

// //NOT OKAY CODE
// // const myName = "Luke";
// // myName = "Sally";

const myFunc = () => console.log("Hey you!");

const moveSquare = () => {
    //document.getElementById("square").classList.toggle(moveSquare);
    const square = document.getElementById("square");
    const button = document.getElementById("button-move");

    if(square.classList.contains("move-square")){
        square.classList.remove("move-square");
        button.innerHTML= "start";
    }else{
        square.classList.add("move-square");
        button.innerHTML = "stop";
    }

}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
}

