let clone1 = {}
let clone2 = {}
for (let key in person) {
    clone1[key] = person[key];
    clone2[key] = person[key];
}
const samePerson = person;
person.age++
person.country = 'FR';
