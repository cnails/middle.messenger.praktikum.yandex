import Component from "../Component";
import { checkIsValid } from "../input";

export class Form extends Component {
    constructor(props: any) {
        super(props);
    }

    validateForm = (e: Event) => {
        let isValid = true;

        for (const [, component] of Object.entries(this.children)) {
            if (component.element?.tagName === 'INPUT') {
                isValid = isValid && checkIsValid(component, component.element.getAttribute('name')!);
            }
        }
        if (!isValid) {
            console.log('form is invalid');
            e.preventDefault();
        }
    }
}
