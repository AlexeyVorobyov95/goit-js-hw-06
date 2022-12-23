const list = document.querySelector(`#categories`);
console.log(`Number of categories:`, list.children.length);
console.log(``);

const animalsItem = list.firstElementChild;
// console.dir(animalsItem);
console.log(`Category:`, animalsItem.firstElementChild.textContent);

console.log(`Elements:`, animalsItem.children[1].children.length);
console.log(``);

const productsItem = list.children[1];
console.log(`Category:`, productsItem.firstElementChild.textContent);
console.log(`Elements:`, productsItem.children[1].children.length);
console.log(``);

const technologiesItem = list.lastElementChild;
console.log(`Category:`, technologiesItem.firstElementChild.textContent);
console.log(`Elements:`, technologiesItem.children[1].children.length);