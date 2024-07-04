var url = "../application/index.json";

const name = document.getElementById('name');
const age = document.getElementById('age');
const cpf = document.getElementById('cpf');
const phone = document.getElementById('phone');
const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
const russian = document.getElementById('russian');
const japanese = document.getElementById('japanese');
const italian = document.getElementById('italian');

fetch(url)
    .then(response => response.json())
    .then(data => {
        printInformation(data);
    });

function printInformation(data) {
    let main = document.getElementById('main');

    // Print users information
    data.users.forEach(user => {
        main.innerHTML += `
            <h1>${user.name}</h1>
            <p>Age: ${user.age} anos</p>
            <p>CPF: ${user.cpf}</p>
            <p>Phone: ${user.phone}</p>
        `;
    });

    main.innerHTML += `<hr>`;

    // Print courses information
    Object.keys(data.courses[0]).forEach(course => {
        main.innerHTML += `
        <h2>${course}</h2>
        `;
        data.courses[0][course].forEach(classmate => {
            main.innerHTML += `
            <p>- ${classmate}</p>
            `;
        });
    });
}



// crtl + / == split the screen in the vscode;
// f12 in the html page to open the page's console;
// alt+l+o to open the Live Server.
