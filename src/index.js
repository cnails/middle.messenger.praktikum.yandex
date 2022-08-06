// import tpl from 'bundle-text:./index.hbs';
import './style.css'
import {renderLogin} from './pages/login/login';
import {renderSignup} from './pages/login/signup';
import {render404} from './pages/404/';
import {renderChatsPage} from './pages/chat/';
import {renderProfilePage} from './pages/profile/';

const routes = {
    not_found: render404,
    login: renderLogin,
    signup: renderSignup,
    chat: renderChatsPage,
    profile: renderProfilePage,
}

const routeHandler = () => {
    const currentHash = window.location.hash;

    // все, что идет после #/ в урле
    let route = currentHash.slice(2);
    if (route.charAt(-1) === '/') {
        route = route.slice(0, -1);
    }

    let page;

    if (!route.length) {
        window.location.hash = '/chat';
        return;
    } else {
        page = routes[route];
    }
    
    if (page) {
        page();
    } else {
        routes.not_found();
    }
}

window.addEventListener('hashchange', routeHandler);
window.addEventListener('locationchange', () => {console.log('location'); routeHandler()});

window.onload = routeHandler;
