const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector(`#ingredients`);
console.log(ingredientsList);

const liPotatoes = document.createElement("li");
// ingredientsList.append(liPotatoes);
liPotatoes.textContent = ingredients[0];
liPotatoes.classList.add(`item`);
console.log(liPotatoes);

const liMushrooms = document.createElement("li");
// ingredientsList.append(liMushrooms);
liMushrooms.textContent = ingredients[1];
liMushrooms.classList.add(`item`);
console.log(liMushrooms);

const liGarlic = document.createElement("li");
// ingredientsList.append(liGarlic);
liGarlic.textContent = ingredients[2];
liGarlic.classList.add(`item`);
console.log(liGarlic);

const liTomatos = document.createElement("li");
// ingredientsList.append(liTomatos);
liTomatos.textContent = ingredients[3];
liTomatos.classList.add(`item`);
console.log(liTomatos);

const liHerbs = document.createElement("li");
// ingredientsList.append(liHerbs);
liHerbs.textContent = ingredients[4];
liHerbs.classList.add(`item`);
console.log(liHerbs);

const liCondiments = document.createElement("li");
// ingredientsList.append(liCondiments);
liCondiments.textContent = ingredients[5];
liCondiments.classList.add(`item`);
console.log(liCondiments);

ingredientsList.append(liPotatoes, liMushrooms, liGarlic, liTomatos, liHerbs, liCondiments);