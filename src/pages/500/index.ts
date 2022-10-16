import template from './error_page.hbs';
import './500.less';
import Component from '../../components/Component';

export class ErrorPage extends Component {
    render() {
        return this.compile(template, {});
    }
}
