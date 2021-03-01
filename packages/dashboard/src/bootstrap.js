import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// running app in isolation
if( process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_dash-root__dev');
    if(devRoot) {
        mount(devRoot);
    }
}

// running app with in container
export { mount };
