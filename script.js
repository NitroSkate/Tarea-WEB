// Object Literal
var person = {
    /* property: value*/
    name: "Joshua",
    lastname: "Sharp",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1975, 09, 27); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970) + sum;
}, 0) / list.length);


// More readable

function getAge(birthday) {
    //Funcion que valida mes y dia de nacimiento
    //La funcion sirve de manera que se obtiene la fecha actual (fact)
    //y la fecha de nacimiento se da en formato fecha
    //El if verifica que si esta en un mes menor y dia y mes igual al de nacimiento,
    //Este if toma en cuenta que aun no se ha cumplido anhios y se le resta a uno puesto que la resta de anhios no considera dia y mes
    var fact = new Date(Date.now());
    birthday = new Date(birthday);
    var edad = fact.getUTCFullYear() - birthday.getUTCFullYear();
    if(fact.getUTCMonth() < birthday.getUTCMonth() || (fact.getUTCMonth() == birthday.getUTCMonth() && fact.getDate() < birthday.getDate())){
        edad= edad - 1;
    }
    return edad;

}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);