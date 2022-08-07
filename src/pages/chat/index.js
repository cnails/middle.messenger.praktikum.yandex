import Handlebars from "handlebars";
import './chat.less';
import '/src/components/chatListItem/chatListItem.less';
import tpl from 'bundle-text:./chat.hbs';
import chatListItem from 'bundle-text:/src/components/chatListItem/chatListItem.hbs';
import selectedChat from 'bundle-text:./selectedChat/selectedChat.hbs';

const data = {
    chats: [
        {
            username: 'Андрей', message: 'Привет, проверка lorem ipsum lorem ipsum',
        },
        {
            username: 'Олег', message: 'Привет, вот макеты {вложение}',
        },
    ],
}

const component = Handlebars.compile(tpl);
Handlebars.registerPartial('chatListItem', chatListItem);
Handlebars.registerPartial('selectedChat', selectedChat);

export const renderChatsPage = () => {
    document.getElementById('root').innerHTML = component(data);
}
