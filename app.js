// let name = prompt("Enter your name ?");

// let gender = prompt("Enter your gender \"male or female\"");

// let age = prompt("Enter your age ?");

// if (age <= 0) {
//     alert("Your age is less than or equal to zero")
// }

// let skipWelcome = confirm("Do you want to skip the welcoming message?");

// let welcomingMessage = `Hello `;

// if (!skipWelcome) {
//     let title = "";
//     if (gender.toLowerCase() === "male") {
//         title = "Mr.";
//     } else if (gender.toLowerCase() === "female") {
//         title = "Ms.";
//     }
//     alert(`${welcomingMessage}${title}${name}`)
// } else {
//     alert(`${welcomingMessage}${name}`)
// }

// Lab 06


function promptmessage(message){
    return prompt(message);
}

function print(element) {
    console.log(element);
}

let skydiving = promptmessage("Have you ever tried skydiving?");
let cooking = promptmessage("Do you enjoy cooking?");
let watchingMovies = promptmessage("Do you prefer watching movies at home rather than in theaters?");

let answers = [skydiving, cooking, watchingMovies];

for (let i = 0; i < answers.length; i++) {
    let element = answers[i];
    if (element == "") {
        answers[i] = "invalid";
        element = "invalid";
    }
    print(element);
}

