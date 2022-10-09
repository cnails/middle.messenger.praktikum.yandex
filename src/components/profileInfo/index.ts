import Button from "../Button";
import { EButtonType } from "../Button/models";
import Component from "../Component";
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

export class ProfileInfo extends Component {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        this.children.submitButton = new Button({
            type: EButtonType.SUBMIT,
            text: 'Сохранить',
            events: {
                'click': () => {}
            },
        });

        return this.compile(template, this.props);
    }
}