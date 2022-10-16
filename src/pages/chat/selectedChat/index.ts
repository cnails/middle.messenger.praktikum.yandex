import Component from "../../../components/Component";
import template from './selectedChat.hbs';

export class SelectedChat extends Component {
    render() {
        return this.compile(template, {});
    }
}