import './login.less';
import Button from '../../components/Button';
import { EButtonType } from '../../components/Button/models';
import template from './signup.hbs';
import Input from '../../components/input';
import { Form } from '../../components/Form';

export class Signup extends Form {
    render() {
        this.children.firstNameInput = new Input({
            type: "text",
            name: "first_name",
            id: "first_name",
            placeholder: "Имя",
        });

        this.children.secondNameInput = new Input({
            type: "text",
            name: "second_name",
            id: "second_name",
            placeholder: "Фамилия",
        });

        this.children.emailInput = new Input({
            type: "text",
            name: "email",
            id: "email",
            placeholder: "Почта",
        });

        this.children.phoneInput = new Input({
            type: "phone",
            name: "phone",
            id: "phone",
            placeholder: "Телефон",
        });

        this.children.loginInput = new Input({
            type: "text",
            name: "login",
            id: "login",
            placeholder: "Логин",
        });

        this.children.passwordInput = new Input({
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Пароль",
        });

        this.children.signupButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Зарегистрироваться',
            events: {
                click: (e: Event) => {
                    console.log('\nFORM:');
                    this.validateForm(e)
                },
            }
        });

        return this.compile(template, {});
    }
}
