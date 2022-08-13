import Handlebars from 'handlebars';
import './chat.less';
import '/src/components/chatListItem/chatListItem.less';
import tpl from './chat.hbs';
import chatListItem from '/src/components/chatListItem/chatListItem.hbs';
import selectedChat from './selectedChat/selectedChat.hbs';

const data = {
  chats: [
    {
      username: 'Андрей', message: 'Привет, проверка lorem ipsum lorem ipsum',
    },
    {
      username: 'Олег', message: 'Привет, вот макеты {вложение}',
    },
  ],
};

Handlebars.registerPartial('chatListItem', chatListItem);
Handlebars.registerPartial('selectedChat', selectedChat);

export const renderChatsPage = () => {
    document.getElementById('root')!.innerHTML = tpl(data);
};
