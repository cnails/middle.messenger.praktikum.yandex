import template from './error_page.hbs';
import './500.less';

export const render500 = () => {
    document.getElementById('root')!.innerHTML = template();
};
