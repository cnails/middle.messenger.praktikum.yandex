import Handlebars from "handlebars";
import './login.less';
import tpl from 'bundle-text:./login.hbs';

const component = Handlebars.compile(tpl);

export const renderLogin = () => {
    document.getElementById('root').innerHTML = component();
}
