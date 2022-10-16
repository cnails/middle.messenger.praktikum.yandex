import './login.less';
import Button from '../../components/Button';
import { EButtonType } from '../../components/Button/models';
import template from './login.hbs';
import Input from '../../components/input';
import { Form } from '../../components/Form';

export class Login extends Form {
    render() {
        this.children.inputLogin = new Input({
            type: "text",
            name: "login",
            id: "login",
            placeholder: "логин",
        });

        this.children.inputPassword = new Input({
            type: "password",
            name: "password",
            id: "password",
            placeholder: "пароль",
        });

        this.children.submitButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Войти',
            events: {
                click: (e: Event) => this.validateForm(e),
            }
        });

        return this.compile(template, {});
    }
}
