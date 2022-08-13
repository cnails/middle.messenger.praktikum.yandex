import './login.less';
import tpl from './login.hbs';

export const renderLogin = () => {
    document.getElementById('root')!.innerHTML = tpl();
};
