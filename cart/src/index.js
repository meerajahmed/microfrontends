import faker from 'faker';

document.getElementById("cart-root").innerHTML = `<p>The cart has ${faker.random.number()} items</p>`;