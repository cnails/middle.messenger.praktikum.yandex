import './chatInput.less';
import template from './chatInput.hbs';
import Component from '../Component';
import Button from '../Button';
import { EButtonType } from '../Button/models';

export class ChatInput extends Component {
    render() {
        this.children.submitButton = new Button({
            type: EButtonType.SUBMIT,
            text: '',
            className: 'submit',
            events: {
                click: () => {console.log('clicked')},
            }
        });

        return this.compile(template, {});
    }
}
