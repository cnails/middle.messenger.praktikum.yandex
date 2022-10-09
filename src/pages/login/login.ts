import './login.less';
import Component from '../../components/Component';
import Button from '../../components/Button';
import { EButtonType } from '../../components/Button/models';
import template from './login.hbs';

const loginStoredDataRegex: Record<string, string> = {
    login: '^[\\d\\w\\-]*[a-zA-Z]+[\\d\\w\\-]*$',
    password: "^(?=.*[A-ZА-ЯЁ])(?=.*\\d).{8,40}$",
}

export class Login extends Component {
    storeData() {
    }

    render() {
        this.children.submitButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Войти',
            events: {
                click: this.storeData,
            }
        });

        return this.compile(template, {});
    }
}
