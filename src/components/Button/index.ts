import Component from "../Component";
import { EButtonType } from "./models";
import template from "./submitButton.hbs";

/**
 * @prop type Тип кнопки.
 * @prop text Текст кнопки.
 * @prop [onClick] Колбэк клика.
 * @prop [className] Класс элемента.
 */
interface IProps {
    type: EButtonType;
    text: string;
    events: {
        click?: () => void;
    }
    className?: string;
}

export default class Button extends Component {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.compile(template, this.props);
    }
}