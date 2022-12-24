const listItemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemsEl.length}`);

const categoryDetails = [...listItemsEl]
  .map(
    (categories) => `Category: ${categories.children[0].textContent} 
Element: ${categories.children[1].children.length}`
  )
  .join("\r\n");

console.log(categoryDetails);