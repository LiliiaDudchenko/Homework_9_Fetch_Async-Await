"use string"

// //1 (Fetch)

// let button = document.querySelector('.button');


// function fillElement(inputThread) {
//     let text = document.querySelectorAll(".col");
//     let divCount = text.length;
//     let i = 0;
//     while (i < divCount) {
//         text[i].innerHTML = inputThread[i].title;
//         i++;
//     }
//     // console.log(text);
// }

// function createTag(newTag, parentElement, atribute) {
//     let newElement = document.createElement(newTag);
//     parentElement.append(newElement);
//     newElement.setAttribute("class", atribute);
// }

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(todo => {
//         fillElement(todo);

//         button.onclick = function () {
//             for (let i = 0; i < 2; i++) {
//                 createTag("div", document.querySelector('.items'), "row");

//                 for (let j = 0; j < 5; j++) {
//                     createTag("div", document.querySelector('.row:last-child'), "col");
//                 }
//             }

//             fillElement(todo);
//         };
//     });




//2 (Fetch + Async / Await)

let button = document.querySelector('.button');


function fillElement(inputThread) {
    let text = document.querySelectorAll(".col");
    let divCount = text.length;
    let i = 0;
    while (i < divCount) {
        text[i].innerHTML = inputThread[i].title;
        i++;
    }
    // console.log(text);
}

function createTag(newTag, parentElement, atribute) {
    let newElement = document.createElement(newTag);
    parentElement.append(newElement);
    newElement.setAttribute("class", atribute);
}

async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todo = await response.json();

    fillElement(todo);

    button.onclick = function () {
        for (let i = 0; i < 2; i++) {
            createTag("div", document.querySelector('.items'), "row");

            for (let j = 0; j < 5; j++) {
                createTag("div", document.querySelector('.row:last-child'), "col");
            }
        }
        fillElement(todo);

    };
}


getTodo();