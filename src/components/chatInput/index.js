import Handlebars from "handlebars";
import './chatInput.css';
import tpl from 'bundle-text:./chatInput.hbs';

const component = Handlebars.compile(tpl);

document.getElementById('root').innerHTML = component();
