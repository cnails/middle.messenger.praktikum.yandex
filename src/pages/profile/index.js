import Handlebars from "handlebars";
import './profile.less';
import '/src/components/avatar/avatar.less';
import tpl from 'bundle-text:./profile.hbs';
import profileAvatar from 'bundle-text:/src/components/avatar/avatar.hbs';
import profileInfo from 'bundle-text:/src/components/profileInfo/profileInfo.hbs'; 
import changePasswordForm from 'bundle-text:/src/components/changePasswordForm/changePasswordForm.hbs'; 
import submitButton from 'bundle-text:/src/components/submitButton/submitButton.hbs'; 

// отвечает за переключение состояния страницы на режим изменения пароля
const isChangePasswordMode = false;
// отвечает за переключение состояния страницы на режим изменения информации профиля
const isChangeInfoMode = false;

const data = {
    avatar: {
        src: undefined,
    },
    email: 'pochta@yandex.ru',
    login: 'login',
    firstName: 'Ivan',
    secondName: 'Ivanov',
    nickname: 'Vanya',
    phone: '+7-999-131-31-67',
    submitButtonText: 'Сохранить',
    isChangePasswordMode,
    isChangeInfoMode,
}

const component = Handlebars.compile(tpl);

Handlebars.registerPartial('profileInfo', profileInfo);
Handlebars.registerPartial('profileAvatar', profileAvatar);
Handlebars.registerPartial('changePasswordForm', changePasswordForm);
Handlebars.registerPartial('submitButton', submitButton);

export const renderProfilePage = () => {
    document.getElementById('root').innerHTML = component(data);
}
