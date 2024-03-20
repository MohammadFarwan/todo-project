let name = prompt("Enter your name ?");

let gender = prompt("Enter your gender \"male or female\"");

let age = prompt("Enter your age ?");

if (age <= 0) {
    alert("Your age is less than or equal to zero")
}

let skipWelcome = confirm("Do you want to skip the welcoming message?");

let welcomingMessage = `Hello `;

if (!skipWelcome) {
    let title = "";
    if (gender.toLowerCase() === "male") {
        title = "Mr.";
    } else if (gender.toLowerCase() === "female") {
        title = "Ms.";
    }
    alert(`${welcomingMessage}${title}${name}`)
} else {
    alert(`${welcomingMessage}${name}`)
}
