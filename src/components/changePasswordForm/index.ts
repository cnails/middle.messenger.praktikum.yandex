import Component from "../Component";
import template from './changePasswordForm.hbs';

export class ChangePasswordForm extends Component {
    render() {
        return this.compile(template, {});
    }
}