/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction updateTerm() {\r\n    let depositType = document.getElementById(\"deposit-type\").value;\r\n    let depositTermSelect = document.getElementById(\"deposit-term\");\r\n    \r\n    depositTermSelect.innerHTML = \"\";\r\n    \r\n    if (depositType === \"replenished\") {\r\n    let terms = [\"6\", \"12\", \"18\", \"24\"];\r\n    \r\n    for (let i = 0; i < terms.length; i++) {\r\n    let option = document.createElement(\"option\");\r\n    option.value = terms[i];\r\n    if (option.value==24)\r\n    option.text = terms[i] + \" месяца\";\r\n    else option.text = terms[i] + \" месяцев\";\r\n    depositTermSelect.appendChild(option);\r\n    }\r\n    } else if (depositType === \"urgent\") {\r\n    let terms = [\"3\", \"6\", \"9\", \"12\", \"18\", \"24\"];\r\n    \r\n    for (let i = 0; i < terms.length; i++) {\r\n    let option = document.createElement(\"option\");\r\n    option.value = terms[i];\r\n    if ((option.value==3) || (option.value==24))\r\n    option.text = terms[i] + \" месяца\";\r\n    else option.text = terms[i] + \" месяцев\";\r\n    depositTermSelect.appendChild(option);\r\n    }\r\n    }\r\n    }\r\n    \r\n    function calculate() {\r\n    let depositType = document.getElementById(\"deposit-type\").value;\r\n    let depositTerm = document.getElementById(\"deposit-term\").value;\r\n    let depositAmount = document.getElementById(\"deposit-amount\").value;\r\n    let resultDiv = document.getElementById(\"result\");\r\n   \r\n\r\n    if (depositType === \"\" || depositTerm === \"\" || depositAmount === \"\") {\r\n    resultDiv.innerHTML = \"Пожалуйста заполните все поля\";\r\n    return;\r\n    }\r\n\r\n    if (depositAmount < 0) {\r\n        resultDiv.innerHTML = \"Введите положительное число\";\r\n        return;\r\n        }\r\n   \r\n    depositAmount = parseFloat(depositAmount);\r\n    \r\n    \r\n    let interestRate;\r\n    if (depositType === \"replenished\") {\r\n    if (depositTerm === \"6\") {\r\n    interestRate = 0.2;\r\n    } else if (depositTerm === \"12\") {\r\n    interestRate = 0.22;\r\n    } else if (depositTerm === \"18\") {\r\n    interestRate = 0.15;\r\n    } else if (depositTerm === \"24\") {\r\n    interestRate = 0.1;\r\n    }\r\n    } else if (depositType === \"urgent\") {\r\n    if (depositTerm === \"3\") {\r\n    interestRate = 0.2;\r\n    } else if (depositTerm === \"6\") {\r\n    interestRate = 0.22;\r\n    } else if (depositTerm === \"9\") {\r\n    interestRate = 0.23;\r\n    } else if (depositTerm === \"12\") {\r\n    interestRate = 0.24;\r\n    } else if (depositTerm === \"18\") {\r\n    interestRate = 0.18;\r\n    } else if (depositTerm === \"24\") {\r\n    interestRate = 0.15;\r\n    }\r\n    }\r\n    \r\n    \r\n    let totalAmount = depositAmount * (1 + interestRate) ** (depositTerm / 12);\r\n    \r\n   \r\n    depositAmount = depositAmount.toFixed(2);\r\n    totalAmount = totalAmount.toFixed(2);\r\n    \r\n  \r\n    if (depositType==\"replanished\")\r\n    {\r\n        if ((depositTerm==3) || (depositTerm==24))\r\n        {let resultMessage = \"Вы выбрали поплняемый вклад \"  + \" на срок  \" + depositTerm + \" месяца \" + \" размером - \" + depositAmount + \" рублей.\"+ \r\n    \" В конце ваш склад будет составлять \" + totalAmount + \" рублей.\";\r\n    resultDiv.innerHTML = resultMessage;}\r\n    else {let resultMessage = \"Вы выбрали поплняемый вклад \"  + \" на срок  \" + depositTerm + \" месяцев \" + \" размером - \" + depositAmount + \" рублей.\"+ \r\n    \" В конце ваш склад будет составлять \" + totalAmount + \" рублей.\";\r\n    resultDiv.innerHTML = resultMessage;}\r\n    }\r\n\r\n    else {if ((depositTerm==3) || (depositTerm==24))\r\n        {let resultMessage = \"Вы выбрали срочный \"  + \" на срок  \" + depositTerm + \" месяца \" + \" размером - \" + depositAmount + \" рублей.\"+ \r\n    \" В конце ваш склад будет составлять \" + totalAmount + \" рублей.\";\r\n    resultDiv.innerHTML = resultMessage;}\r\n    else {let resultMessage = \"Вы выбрали срочный вклад \"  + \" на срок  \" + depositTerm + \" месяцев \" + \" размером - \" + depositAmount + \" рублей.\"+ \r\n    \" В конце ваш склад будет составлять \" + totalAmount + \" рублей.\";\r\n    resultDiv.innerHTML = resultMessage;}}\r\n}\n\n//# sourceURL=webpack://3task/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|     font-family: Arial, sans-serif;\\n|     margin: 0;\");\n\n//# sourceURL=webpack://3task/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;