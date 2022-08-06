import Handlebars from "handlebars";
import './chatElement.less';
import tpl from 'bundle-text:./chatElement.hbs';
import {createTemplate} from '/src/utils/createTemplate';

const comp = Handlebars.compile(tpl);

export const chatElement = (parentId) => {
    document.getElementById(parentId).appendChild(createTemplate(comp, {username: "Андрей", message: "Привет, проверка lorem ipsum lorem ipsum"}));
    document.getElementById(parentId).appendChild(createTemplate(comp, {username: "Олег", message: "Привет, вот макеты {вложение}"}));
}
