import Handlebars from "handlebars";
import './404.less';
import tpl from 'bundle-text:./404.hbs';

const component = Handlebars.compile(tpl);

export const render404 = () => {
    document.getElementById('root').innerHTML = component();
}
