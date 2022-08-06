import Handlebars from "handlebars";
import './profile.less';
import tpl from 'bundle-text:./profile.hbs';

const comp = Handlebars.compile(tpl);

const data = {
    email: 'pochta@yandex.ru',
    login: 'login',
    firstName: 'Ivan',
    secondName: 'Ivanov',
    nickname: 'Vanya',
    phone: '+7-999-131-31-67',
}

export const renderProfilePage = () => {
    document.getElementById('root').innerHTML = comp(data);
}
