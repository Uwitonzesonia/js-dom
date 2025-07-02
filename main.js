let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');
console.log(items);

let data = [].map.call(items, (item) => item.textContent);
console.log(data);