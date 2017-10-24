const nutrition = require("./nutritionalValues.json");
const breakfast = [nutrition.eggs, nutrition.milk, nutrition.cottageCheese];
const lunch = [nutrition.oats, nutrition.kwark];
const dinner = [nutrition.chicken, nutrition.cottageCheese];
let totaldailyProtein = 0;

function proteinIntake(array){
    let proteinCountInGrams = 0;
    array.forEach(function(element){
        proteinCountInGrams += element.protein * element.serving;
        // console.log(element.protein, element.serving, proteinCountInGrams);
    });
    return proteinCountInGrams;
}

totaldailyProtein = proteinIntake(breakfast) + proteinIntake(lunch) + proteinIntake(dinner);
console.log(totaldailyProtein);


/* 

for (let food in nutrition){
    let {food} = nutrition;
    console.log(eggs);
    console.log(cottageCheese);
}

*/