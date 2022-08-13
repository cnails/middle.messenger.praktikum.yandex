import './404.less';
import tpl from './not_found.hbs';

export const render404 = () => {
    document.getElementById('root')!.innerHTML = tpl();
};
