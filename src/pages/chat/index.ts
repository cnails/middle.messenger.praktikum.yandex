import './chat.less';
import '/src/components/chatListItem/chatListItem.less';
import template from './chat.hbs';
import Component from '../../components/Component';
import { ChatListItem } from '../../components/chatListItem';
import { SelectedChat } from './selectedChat';

interface IChatInfo {
    username: string;
    message: string;
}

interface IProps {
    chat: IChatInfo[];
}

export class Chat extends Component {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        data.chats.map((chat, id) => {
            this.children[`chat-${id}`] = new ChatListItem({
                ...chat
            });
        });

        this.children.selectedChat = new SelectedChat();

        return this.compile(template, this.props);
    }
}

const data = {
    chats: [
        {
            username: 'Андрей',
            message: 'Привет, проверка lorem ipsum lorem ipsum',
        },
        {
            username: 'Олег',
            message: 'Привет, вот макеты {вложение}',
        },
    ],
};

// Handlebars.registerPartial('chatListItem', chatListItem);
// Handlebars.registerPartial('selectedChat', selectedChat);

