import './login.less';
import Component from '../../components/Component';
import Button from '../../components/Button';
import { EButtonType } from '../../components/Button/models';
import template from './signup.hbs';

export class Signup extends Component {
    render() {
        this.children.signupButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Зарегистрироваться',
            className: 'test',
            events: {
                click: () => {console.log('clicked')},
            }
        });

        return this.compile(template, {});
    }
}
