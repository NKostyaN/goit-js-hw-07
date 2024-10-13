const categories = document.querySelector('ul#categories').children;

console.log(`Number of categories: ${categories.length}`);
for (const item of categories) {
  console.log(`Category: ${item.firstElementChild.innerText}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
}
