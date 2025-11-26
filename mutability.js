const clone1 = { ...person };
const clone2 = { ...person };
const samePerson = person;

person.age++;
person.country = "FR";
console.log(person);
console.log(clone1);
console.log(samePerson);
