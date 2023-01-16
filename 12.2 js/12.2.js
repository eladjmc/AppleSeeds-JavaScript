const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id.

const getCandy = (candyStore, id) =>
  candyStore.candies.filter((obj) => obj.id === id)[0];
console.log(getCandy(candyStore, "as12f"));

// 2. Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.
const getPrice = (candyStore, id) =>
  candyStore.candies.filter((obj) => obj.id === id)[0].price;
console.log(getCandy(candyStore, "as12f"));

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.

const addCandy = (candyStore, id, name, price) => {
  candyStore.candies.push({
    id: id,
    name: name,
    price: price,
    amount: 1,
  });
};
addCandy(candyStore, "lala", "elad", 80);
console.log(candyStore);

// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.

const buy = (candyStore, id) => {
    if(getCandy(candyStore,id) && (getCandy(candyStore, id).amount>0)){
        getCandy(candyStore, id).amount -= 1;
        candyStore.cashRegister += getPrice(candyStore, id);
        return;
    }
    console.log('No such candy!');
};
buy(candyStore,'lala');
console.log(candyStore);