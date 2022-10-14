import Button from "../Button";
import { EButtonType } from "../Button/models";
import Component from "../Component";
import { Form } from "../Form";
import Input from "../input";
import template from './profileInfo.hbs';

interface IProps {
    avatar: {
        src?: string,
    },
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    nickname: string,
    phone: string,
}

export class ProfileInfo extends Form {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const {email, login, firstName, secondName, nickname, phone} = this.props;

        this.children.emailInput = new Input({
            type: "text",
            name: "email",
            id: "email",
            placeholder: email,
        });

        this.children.loginInput = new Input({
            type: "text",
            name: "login",
            id: "login",
            placeholder: login,
        });

        this.children.firstNameInput = new Input({
            type: "text",
            name: "firstName",
            id: "firstName",
            placeholder: firstName,
        });

        this.children.secondNameInput = new Input({
            type: "text",
            name: "secondName",
            id: "secondName",
            placeholder: secondName,
        });

        this.children.nicknameInput = new Input({
            type: "text",
            name: "nickname",
            id: "nickname",
            placeholder: nickname,
        });

        this.children.phoneInput = new Input({
            type: "text",
            name: "phone",
            id: "phone",
            placeholder: phone,
        });

        this.children.submitButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Сохранить',
            events: {
                click: (e: Event) => {
                    console.log('\nFORM:');
                    this.validateForm(e);
                },
            },
        });

        return this.compile(template, this.props);
    }
}