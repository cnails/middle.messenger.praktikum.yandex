"use strict";
exports.__esModule = true;
exports.renderProfilePage = void 0;
var handlebars_1 = require("handlebars");
require("./profile.less");
require("/src/components/avatar/avatar.less");
var profile_hbs_1 = require("./profile.hbs");
var avatar_hbs_1 = require("/src/components/avatar/avatar.hbs");
var profileInfo_hbs_1 = require("/src/components/profileInfo/profileInfo.hbs");
var changePasswordForm_hbs_1 = require("/src/components/changePasswordForm/changePasswordForm.hbs");
var submitButton_hbs_1 = require("/src/components/submitButton/submitButton.hbs");
// отвечает за переключение состояния страницы на режим изменения пароля
var isChangePasswordMode = false;
// отвечает за переключение состояния страницы на режим изменения информации профиля
var isChangeInfoMode = false;
var data = {
    avatar: {
        src: undefined
    },
    email: 'pochta@yandex.ru',
    login: 'login',
    firstName: 'Ivan',
    secondName: 'Ivanov',
    nickname: 'Vanya',
    phone: '+7-999-131-31-67',
    submitButtonText: 'Сохранить',
    isChangePasswordMode: isChangePasswordMode,
    isChangeInfoMode: isChangeInfoMode
};
var component = handlebars_1["default"].compile(profile_hbs_1["default"]);
handlebars_1["default"].registerPartial('profileInfo', profileInfo_hbs_1["default"]);
handlebars_1["default"].registerPartial('profileAvatar', avatar_hbs_1["default"]);
handlebars_1["default"].registerPartial('changePasswordForm', changePasswordForm_hbs_1["default"]);
handlebars_1["default"].registerPartial('submitButton', submitButton_hbs_1["default"]);
var renderProfilePage = function () {
    document.getElementById('root').innerHTML = component(data);
};
exports.renderProfilePage = renderProfilePage;
