import Handlebars from 'handlebars';
import './profile.less';
import '/src/components/avatar/avatar.less';
import tpl from './profile.hbs';
import profileAvatar from '/src/components/avatar/avatar.hbs';
import profileInfo from '/src/components/profileInfo/profileInfo.hbs';
import changePasswordForm from '/src/components/changePasswordForm/changePasswordForm.hbs';
import submitButton from '/src/components/submitButton/submitButton.hbs';

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
};

Handlebars.registerPartial('profileInfo', profileInfo);
Handlebars.registerPartial('profileAvatar', profileAvatar);
Handlebars.registerPartial('changePasswordForm', changePasswordForm);
Handlebars.registerPartial('submitButton', submitButton);

export const renderProfilePage = () => {
    document.getElementById('root')!.innerHTML = tpl(data);
};
