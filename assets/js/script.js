/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/


// ask user for first name
const first_name = prompt('Type here your first name');

// log prompt 'first_name' in console
console.log(first_name);

// ask user for surname
const surname = prompt('Type here your surname');

// log prompt 'surname' in console
console.log(surname);

// ask for 'favourite colour' in console
const favourite_colour = prompt('Type here your favourite colour');

// log prompt 'favourite colour' in console
console.log(favourite_colour);

// create variable password
const password = first_name + surname + favourite_colour + 23;

// log variable 'password' in console
console.log(password);

// print 'password' in document

const passwordElement = document.getElementById('password'); 

passwordElement.innerHTML = `La tua password è: ${password}`;