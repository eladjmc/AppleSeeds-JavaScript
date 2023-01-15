// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream","Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza","Olives", "Hamburgers"];

const compareFoods =(food1, food2)=>{
    arrayOfDishes = [];
food1.forEach(dish => {
    food2.forEach(dish2 => {
        dish === dish2 && arrayOfDishes.push(dish)
    });
});
return arrayOfDishes;
}

console.log(compareFoods(food,food1));