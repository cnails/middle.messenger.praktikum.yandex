import Handlebars from "handlebars";
import './login.less';
import tpl from 'bundle-text:./signup.hbs';

const comp = Handlebars.compile(tpl);

export const renderSignup = () => {
    document.getElementById('root').innerHTML = comp();
}
