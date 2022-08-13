import Handlebars from "handlebars";
import './chatHeader.less';
import tpl from 'bundle-text:./chatHeader.hbs';

const component = Handlebars.compile(tpl);

document.getElementById('root').innerHTML = component();
