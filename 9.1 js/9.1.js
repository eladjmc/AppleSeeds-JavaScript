const listOfNeighbours = [
    ["Canada", "Mexico"],["Spain"], ["Norway", "Sweden", "Russia"],
];

const printOutNeighbors = (arr) => {
    for(let i=0 ;i< arr.length; i++){
        for(let j=0 ; j< arr[i].length ; j++){
            console.log(`Neighbor: ${arr[i][j]}`);
        }
    }

}

printOutNeighbors(listOfNeighbours)