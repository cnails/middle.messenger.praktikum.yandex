import Component from "../Component";
import template from "./chatListItem.hbs";

interface IProps {
    username: string;
    message: string;
}

export class ChatListItem extends Component {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.compile(template, this.props);
    }
}