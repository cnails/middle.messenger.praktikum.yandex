import Handlebars from "handlebars";
import './500.css';
import tpl from 'bundle-text:./500.hbs';

const component = Handlebars.compile(tpl);

document.getElementById('root').innerHTML = component();
