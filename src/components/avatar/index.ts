import Component from "../Component";
import template from "./avatar.hbs";

export class ProfileAvatar extends Component {
    render() {
        return this.compile(template, {});
    }
}