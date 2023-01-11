const myCountry = {
    name : 'Israel',
    capital : 'jerusalem',
    language : 'hebrew',
    population : 9,
    neighbors: ['Egypt', 'Syria', 'Lebanon'],
    describe : () =>{
        console.log(myCountry.name,myCountry.capital,myCountry.language,myCountry.population,myCountry.neighbors);
    },
    isIsland : ()=> myCountry.neighbors ? false : true
}
myCountry.describe();
console.log('Is '+myCountry.name + ' an island? => '+myCountry.isIsland().toString());