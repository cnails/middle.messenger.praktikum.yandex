"use strict";
exports.__esModule = true;
exports.renderSignup = void 0;
var handlebars_1 = require("handlebars");
require("./login.less");
var signup_hbs_1 = require("./signup.hbs");
var component = handlebars_1["default"].compile(signup_hbs_1["default"]);
var renderSignup = function () {
    document.getElementById('root').innerHTML = component();
};
exports.renderSignup = renderSignup;
