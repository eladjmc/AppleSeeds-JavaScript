function percentageOfWorld1(population){
    return (population/ 7900) * 100;
}

const pop1= percentageOfWorld1(10);
const pop2= percentageOfWorld1(70);
const pop3= percentageOfWorld1(900);

console.log(`country1: ${pop1.toFixed(2)} country3: ${pop2.toFixed(2)} country3: ${pop3.toFixed(2)}`);

const percentageOfWorld2 = () => (population/ 7900) * 100;

const pop12= percentageOfWorld1(10);
const pop22= percentageOfWorld1(70);
const pop32= percentageOfWorld1(900);

console.log(`country1: ${pop12.toFixed(2)} country3: ${pop22.toFixed(2)} country3: ${pop32.toFixed(2)}`);