class Toy{
    constructor(name, price, age, rating){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
    }
    
    getDetails(toy){

    }

    getToyItem(){

    }

}

const createToys = () => {
    const table = document.getElementById("toys-table");
    const toys = [];
    toys.push(new Toy("Avacado", 15, "5+", 1));
    toys.push(new Toy("Baby Yoda", 45, "7+", 5));
    toys.push(new Toy("Large Bear", 75, "9+", 5));
    toys.push(new Toy("Buffalo", 35, "6+", 4));
    toys.push(new Toy("Teddy Bear", 20, "3+", 3));
    toys.push(new Toy("Turtle", 18, "3+", 2));

    toys.forEach(toy => {
        table.append(toy.tableRow);
    });
};

window.onload = () => {
    createToys();
}