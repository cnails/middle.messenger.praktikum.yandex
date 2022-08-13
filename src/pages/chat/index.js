"use strict";
exports.__esModule = true;
exports.renderChatsPage = void 0;
var handlebars_1 = require("handlebars");
require("./chat.less");
require("/src/components/chatListItem/chatListItem.less");
var chat_hbs_1 = require("./chat.hbs");
var chatListItem_hbs_1 = require("/src/components/chatListItem/chatListItem.hbs");
var selectedChat_hbs_1 = require("./selectedChat/selectedChat.hbs");
var data = {
    chats: [
        {
            username: 'Андрей', message: 'Привет, проверка lorem ipsum lorem ipsum'
        },
        {
            username: 'Олег', message: 'Привет, вот макеты {вложение}'
        },
    ]
};
var component = handlebars_1["default"].compile(chat_hbs_1["default"]);
handlebars_1["default"].registerPartial('chatListItem', chatListItem_hbs_1["default"]);
handlebars_1["default"].registerPartial('selectedChat', selectedChat_hbs_1["default"]);
var renderChatsPage = function () {
    document.getElementById('root').innerHTML = component(data);
};
exports.renderChatsPage = renderChatsPage;
