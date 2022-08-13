"use strict";
exports.__esModule = true;
exports.renderLogin = void 0;
var handlebars_1 = require("handlebars");
require("./login.less");
var login_hbs_1 = require("./login.hbs");
var component = handlebars_1["default"].compile(login_hbs_1["default"]);
var renderLogin = function () {
    document.getElementById('root').innerHTML = component();
};
exports.renderLogin = renderLogin;
