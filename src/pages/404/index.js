"use strict";
exports.__esModule = true;
exports.render404 = void 0;
var handlebars_1 = require("handlebars");
require("./404.less");
var _404_hbs_1 = require("./404.hbs");
var component = handlebars_1["default"].compile(_404_hbs_1["default"]);
var render404 = function () {
    document.getElementById('root').innerHTML = component();
};
exports.render404 = render404;
