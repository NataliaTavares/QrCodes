(function() {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qrcode_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode-svg */ "qrcode-svg");
/* harmony import */ var qrcode_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const url = req.query.url;
  const svg = new (qrcode_svg__WEBPACK_IMPORTED_MODULE_0___default())(url);
  res.statusCode = 200;
  res.setHeader('Content-type', 'image/svg+xml');
  res.send(svg.svg());
});

/***/ }),

/***/ "qrcode-svg":
/*!*****************************!*\
  !*** external "qrcode-svg" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("qrcode-svg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQvLi9wYWdlcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2l0L2V4dGVybmFsIFwicXJjb2RlLXN2Z1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInVybCIsInF1ZXJ5Iiwic3ZnIiwiUVJDb2RlIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFjLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3hCLFFBQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELEdBQXRCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHLElBQUlDLG1EQUFKLENBQVdILEdBQVgsQ0FBWjtBQUVBRCxLQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQUwsS0FBRyxDQUFDTSxTQUFKLENBQWMsY0FBZCxFQUE4QixlQUE5QjtBQUNBTixLQUFHLENBQUNPLElBQUosQ0FBU0osR0FBRyxDQUFDQSxHQUFKLEVBQVQ7QUFDSCxDQVBELEU7Ozs7Ozs7Ozs7O0FDRkEsd0MiLCJmaWxlIjoicGFnZXMvYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLXN2Z1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gcmVxLnF1ZXJ5LnVybFxyXG4gICAgY29uc3Qgc3ZnID0gbmV3IFFSQ29kZSh1cmwpXHJcblxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdpbWFnZS9zdmcreG1sJylcclxuICAgIHJlcy5zZW5kKHN2Zy5zdmcoKSlcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXJjb2RlLXN2Z1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==