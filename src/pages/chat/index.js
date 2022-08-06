import Handlebars from "handlebars";
import './chat.less';
import tpl from 'bundle-text:./chat.hbs';
import {chatElement} from '/src/components/chatElement/';

const comp = Handlebars.compile(tpl);

export const renderChatsPage = () => {
    document.getElementById('root').innerHTML = comp();
    chatElement('chatList');
}
