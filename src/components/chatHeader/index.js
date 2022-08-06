import Handlebars from "handlebars";
import './chatHeader.css';
import tpl from 'bundle-text:./chatHeader.hbs';

const comp = Handlebars.compile(tpl);

document.getElementById('root').innerHTML = comp();
