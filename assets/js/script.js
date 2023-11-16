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
const surname = prompt('Type here your surname')

// log prompt 'surname' in console
console.log(surname);

// create variable password
const password = first_name + surname + 23

// log variable 'password' in console
console.log(password);

// print 'password' in document

const messageElement = document.getElementById('message'); 

messageElement.innerHTML = `La tua password è: ${password}`;