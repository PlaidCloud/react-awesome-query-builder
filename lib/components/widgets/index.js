"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ValueFieldWidget: true,
  FuncWidget: true
};
Object.defineProperty(exports, "ValueFieldWidget", {
  enumerable: true,
  get: function get() {
    return _ValueField["default"];
  }
});
Object.defineProperty(exports, "FuncWidget", {
  enumerable: true,
  get: function get() {
    return _FuncWidget["default"];
  }
});

var _ValueField = _interopRequireDefault(require("../ValueField"));

var _FuncWidget = _interopRequireDefault(require("../FuncWidget"));

var _index = require("./vanilla/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }