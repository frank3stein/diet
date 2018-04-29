const nutrition = require("./nutritionalValues.json");
const breakfast = [nutrition.eggs, nutrition.milk, nutrition.cottageCheese];
const lunch = [nutrition.oats, nutrition.kwark];
const dinner = [nutrition.chicken900, nutrition.cottageCheese];
const day = [].concat(breakfast, lunch, dinner);
// TODO for different packages of Chicken, [''] selection
// Spinach and rucola to be added

function proteinIntakePerMeal(array){
    let proteinCountInGrams = 0;
    array.forEach(function(element){
        proteinCountInGrams += element.protein * element.serving;
    });
  return proteinCountInGrams;
}

function costPerMeal(array){
    let cost = 0;
    array.forEach(element => {
        let weightOrCount = (element.weight || element.count);
        cost += (element.serving/weightOrCount)*element.price  
    })
    return cost;
}

function costPerMonth(){
    console.log('Breakfast cost ', costPerMeal(breakfast).toFixed(2),'€');
    console.log('Lunch cost ',costPerMeal(lunch).toFixed(2),'€');
    console.log('Dinner cost ',costPerMeal(dinner).toFixed(2),'€');
    console.log('Monthly cost', (30*(costPerMeal(breakfast)+costPerMeal(lunch)+costPerMeal(dinner))).toFixed(2), '€');
}

costPerMonth()
