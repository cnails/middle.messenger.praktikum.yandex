import './profile.less';
import '/src/components/avatar/avatar.less';
import template from './profile.hbs';
import Component from '../../components/Component';
import { ProfileAvatar } from '../../components/avatar';
import { ProfileInfo } from '../../components/profileInfo';
import { ChangePasswordForm } from '../../components/changePasswordForm';

// отвечает за переключение состояния страницы на режим изменения пароля
const isChangePasswordMode = false;
// отвечает за переключение состояния страницы на режим изменения информации профиля
const isChangeInfoMode = false;

interface IProps {
    avatar: {
        src?: string,
    },
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    nickname: string,
    phone: string,
}

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
};

export class ProfilePage extends Component {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        this.children.profileAvatar = new ProfileAvatar();
        this.children.profileInfo = new ProfileInfo(data);
        this.children.changePasswordForm = new ChangePasswordForm();

        return this.compile(template, data);
    }
}
