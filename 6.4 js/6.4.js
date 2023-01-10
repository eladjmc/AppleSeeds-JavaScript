const percentageOfWorld1 = (population) => (population/ 7900) * 100;
const population = [60,50,42,10];

const populationPercentages = (popArray) => {
 let percentages = [];
 for (const country of popArray) {
    percentages.push(percentageOfWorld1(country).toFixed(2)+'%')
  }
  return percentages;
}

console.log(populationPercentages(population));