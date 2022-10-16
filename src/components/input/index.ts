import Component from "../Component";
import template from "./input.hbs";

const validators: Record<string, string> = {
    login: "^[\\d\\w\\-]*[a-zA-Z]+[\\d\\w\\-]*$",
    password: "^(?=.*[A-ZА-ЯЁ])(?=.*\\d).{8,40}$",
    first_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
    second_name: "^([A-ZА-ЯЁ]+)[a-zA-ZА-Яа-яЁё\\-]*$",
    email: "^[\\w\\d]+@\\w+\\.\\w+",
    phone: "^\\+?\\d{10,15}$",
    newPassword: "^(?=.*[A-ZА-ЯЁ])(?=.*\\d).{8,40}$",
    message: ".*",
}

interface IProps {
    type: string,
    name: string,
    id: string,
    placeholder: string,
}

export const checkIsValid = (inputComponent: Component, name: string) => {
    const value = (inputComponent.element as HTMLInputElement).value;
    console.log(value);

    return !!value.match(validators[name]);
} 

export default class Input extends Component {
    constructor(props: IProps) {
        super(props);

        this.props.events = {
            blur: (event: any) => this.validateInput(this.props.name, event.target),
            focus: (event: any) => this.validateInput(this.props.name, event.target),
        }
    }

    validateInput = (name: string, target: HTMLInputElement) => {
        const result = target.value.match(validators[name]);
    
        if (target.value && !result) {
            document.getElementById(this.props.id)?.classList.add('invalidInput');
        } else {
            document.getElementById(this.props.id)?.classList.remove('invalidInput');
        }
    }
    render() {
        return this.compile(template, this.props);
    }
}