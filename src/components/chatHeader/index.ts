import './chatHeader.less';
import template from './chatHeader.hbs';
import Component from '../Component';

export class ChatHeader extends Component {
    render() {
        return this.compile(template, {});
    }
}
