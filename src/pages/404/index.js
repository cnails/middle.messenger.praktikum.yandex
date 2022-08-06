import Handlebars from "handlebars";
import './404.css';
import tpl from 'bundle-text:./404.hbs';

const comp = Handlebars.compile(tpl);

export const render404 = () => {
    document.getElementById('root').innerHTML = comp();
}
