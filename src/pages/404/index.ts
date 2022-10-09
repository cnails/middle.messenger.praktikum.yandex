import Component from '../../components/Component';
import './404.less';
import template from './not_found.hbs';

export class NotFound extends Component {
    render() {
        return this.compile(template, {});
    }
};
