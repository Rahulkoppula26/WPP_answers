let dayNumber = new Date().getDay();
switch (dayNumber) {
    case 0:
        console.log("Today is : .");
        break;
    case 1:
        console.log("Today is : Monday.");
        break;
    case 2:
        console.log("Today is : Tuesday.");
        break;
    case 3:
        console.log("Today is : Wednesday.");
        break;
    case 4:
        console.log("Today is : Thursday.");
        break;
    case 5:
        console.log("Today is : Friday.");
        break;
    case 6:
        console.log("Today is : Saturday.");
        break;

    default:
        console.log("Not a valid input");
        break;
}
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes=currentTime.getMinutes();
let secs=currentTime.getSeconds();
let ampm = hours>=12 ? "PM" :"AM";
let digitalTime = `${hours} ${ampm} : ${minutes} : ${secs}`;
console.log(`Current time is : ${digitalTime}`);