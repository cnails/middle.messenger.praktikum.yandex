import Handlebars from "handlebars";
import './500.css';
import tpl from 'bundle-text:./500.hbs';

const comp = Handlebars.compile(tpl);

document.getElementById('root').innerHTML = comp();
