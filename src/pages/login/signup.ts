import './login.less';
import tpl from './signup.hbs';

export const renderSignup = () => {
    document.getElementById('root')!.innerHTML = tpl();
};
