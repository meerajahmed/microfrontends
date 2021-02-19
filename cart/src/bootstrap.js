import faker from 'faker';

const mount = (el) => {
    el.innerHTML = `<p>The cart has ${faker.random.number()} items</p>`;
};


if(process.env.NODE_ENV === 'development'){
    const el = document.getElementById('dev-cart-root');
    if(el){
        mount(el);
    }
}

export { mount };
