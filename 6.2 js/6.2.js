let people = ["Greg", "Mary", "Devon", "James"];
people.forEach((person) => {
  console.log(person);
});
people.shift();
people.pop();
people.unshift('Matt');
console.log(people);
people.push("Elad");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if(people[i] === 'Mary') {
        break;
    }
}
arrCopy = [];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if((people[i] !== 'Mary') && people[i] !== 'Matt') {
        arrCopy.push(people[i])
    }
    
}
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,'Elizabeth');
people.splice(3,0,'Artie');
withBob = people;
withBob.push('Bob')

console.log(people);



