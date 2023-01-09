const average = getAverage = (scores) => scores.reduce((partialSum, a) => partialSum + a, 0)/scores.length;

const scores = {
    'John' : average([89,120,103]),
    'Mike' : average([116,94,123]),
    'Mary' : average([97,134,105])
};

bestScorer = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
bestAverageScore = Object.values(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

console.log(`The person with the highest score team is ${bestScorer} with the average score of: ${bestAverageScore}`);
