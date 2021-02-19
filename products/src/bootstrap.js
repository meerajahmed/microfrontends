import faker from 'faker';

const mount = (el) => {
    let products = '';

    for(let i = 0; i<3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    
    el.innerHTML = products;
};

/**
 * Running in isolation
*/
if(process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-product-root');
    if(el) {
        mount(el);
    }
}


/**
 * Running in container
*/

export { mount }