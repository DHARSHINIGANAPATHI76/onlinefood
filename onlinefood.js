console.log("MENU");
console.log("1. Pizza");
console.log("2. Burger");
console.log("3. Biriyani");
console.log("4. Apple juice");
console.log("5. Idli");

let choice = prompt("Enter your choice");
let rate = 0; 
let n, cost; 

switch(choice) {
    case "1": 
        n = prompt("Enter the required quantity");
        cost = 200;
        rate = cost * n;
        break;

    case "2": 
        n = prompt("Enter the required quantity");
        cost = 300;
        rate = cost * n;
        break;

    case "3": 
        n = prompt("Enter the required quantity");
        cost = 300;
        rate = cost * n;
        break;

    case "4": 
        n = prompt("Enter the required quantity");
        cost = 250;
        rate = cost * n;
        break;

    case "5": 
        n = prompt("Enter the required quantity");
        cost = 100;
        rate = cost * n;
        break;

    default:
        console.log("Invalid choice");
        break;
}

if(rate > 500){
    rate = rate - (rate * (10 / 100)); 
    console.log( rate);
} else {
    console.log( rate);
}