/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _displayModule = __webpack_require__(1);

document.getElementById("btnSetInfo").addEventListener("click", function () {
    var empName = document.getElementById("empName").value;
    //dispModule.setEmployeeName(empName);
    (0, _displayModule.setEmployeeName)(empName);
}); //define(['./display-module'], function(dispModule) {

//(function() {

//var dispModule = displayModule();

//var dispModule = require('./display-module');

document.getElementById("btnGetInfo").addEventListener("click", function () {

    var empWorkingHours = document.getElementById("empWorkingHours").value;
    //var calculatedSalary = dispModule.displayEmployeeSalary(empWorkingHours);
    var calculatedSalary = (0, _displayModule.displayEmployeeSalary)(empWorkingHours);

    //var str = dispModule.getEmployeeName() + " and salary is :" + calculatedSalary;
    var str = (0, _displayModule.getEmployeeName)() + " and salary is :" + calculatedSalary;

    document.getElementById("result").innerHTML = str;
});

//})();
//})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _employeeModule = __webpack_require__(2);

//var empModule = require('./employee-module');

function setEmployeeName(name) {

    //var employeeName = empModule.setName(name);
    (0, _employeeModule.setName)(name);
} //var displayModule = function() {

//define(['./employee-module'], function(empModule) {

//var empModule = employeeModule();

function getEmployeeName(name) {

    //return empModule.getName();
    return (0, _employeeModule.getName)();
}

function displayEmployeeName() {

    // var employeeName = empModule.getName();
    // return "My name is : " + employeeName;

    var employeeName = (0, _employeeModule.getName)();
    return "My name is : " + employeeName;
}

function displayEmployeeSalary(workingHours) {

    // var employeeSalary = empModule.calculateSalary(workingHours);
    // return employeeSalary;

    debugger;
    var employeeSalary = (0, _employeeModule.calculateSalary)(workingHours);
    return employeeSalary;
}

exports.displayEmployeeName = displayEmployeeName;
exports.displayEmployeeSalary = displayEmployeeSalary;
exports.setEmployeeName = setEmployeeName;
exports.getEmployeeName = getEmployeeName;

// return {
//     displayEmployeeName: displayEmployeeName,
//     displayEmployeeSalary: displayEmployeeSalary,
//     setEmployeeName: setEmployeeName,
//     getEmployeeName: getEmployeeName,
// };

//}
//})

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//define([], function() {

//var employeeModule = function() {

var employee = {};

var empName = '';

function calculateSalary(workinghours) {

    return workinghours * 10;
}

function setName(name) {
    empName = name;
}

function getName() {
    return empName;
}

// exports.setName = setName;
// exports.getName = getName;
// exports.calculateSalary = calculateSalary;

exports.setName = setName;
exports.getName = getName;
exports.calculateSalary = calculateSalary;

// employee.setName = setName;
// employee.getName = getName;
// employee.calculateSalary = calculateSalary;

// return employee;
//}

//})

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGUwNThmN2UxOWM3YjBjZTFjOTkiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kaXNwbGF5LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2VtcGxveWVlLW1vZHVsZS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtcE5hbWUiLCJ2YWx1ZSIsImVtcFdvcmtpbmdIb3VycyIsImNhbGN1bGF0ZWRTYWxhcnkiLCJzdHIiLCJpbm5lckhUTUwiLCJzZXRFbXBsb3llZU5hbWUiLCJuYW1lIiwiZ2V0RW1wbG95ZWVOYW1lIiwiZGlzcGxheUVtcGxveWVlTmFtZSIsImVtcGxveWVlTmFtZSIsImRpc3BsYXlFbXBsb3llZVNhbGFyeSIsIndvcmtpbmdIb3VycyIsImVtcGxveWVlU2FsYXJ5IiwiZXhwb3J0cyIsImVtcGxveWVlIiwiY2FsY3VsYXRlU2FsYXJ5Iiwid29ya2luZ2hvdXJzIiwic2V0TmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JEQTs7QUFFQUEsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVc7QUFDdkUsUUFBSUMsVUFBVUgsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0csS0FBakQ7QUFDQTtBQUNBLHdDQUFnQkQsT0FBaEI7QUFDSCxDQUpELEUsQ0FWQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFVQUgsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFlBQVc7O0FBRXZFLFFBQUlHLGtCQUFrQkwsU0FBU0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNHLEtBQWpFO0FBQ0E7QUFDQSxRQUFJRSxtQkFBbUIsMENBQXNCRCxlQUF0QixDQUF2Qjs7QUFFQTtBQUNBLFFBQUlFLE1BQU0sd0NBQW9CLGtCQUFwQixHQUF5Q0QsZ0JBQW5EOztBQUVBTixhQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDTyxTQUFsQyxHQUE4Q0QsR0FBOUM7QUFFSCxDQVhEOztBQWFBO0FBQ0EsSTs7Ozs7Ozs7O0FDeEJBOztBQUVBOztBQUVBLFNBQVNFLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCOztBQUUzQjtBQUNBLGlDQUFRQSxJQUFSO0FBQ0gsQyxDQWREOztBQUVBOztBQUVBOztBQVlBLFNBQVNDLGVBQVQsQ0FBeUJELElBQXpCLEVBQStCOztBQUUzQjtBQUNBLFdBQU8sOEJBQVA7QUFDSDs7QUFFRCxTQUFTRSxtQkFBVCxHQUErQjs7QUFFM0I7QUFDQTs7QUFFQSxRQUFJQyxlQUFlLDhCQUFuQjtBQUNBLFdBQU8sa0JBQWtCQSxZQUF6QjtBQUVIOztBQUVELFNBQVNDLHFCQUFULENBQStCQyxZQUEvQixFQUE2Qzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBLFFBQUlDLGlCQUFpQixxQ0FBZ0JELFlBQWhCLENBQXJCO0FBQ0EsV0FBT0MsY0FBUDtBQUNIOztBQUVEQyxRQUFRTCxtQkFBUixHQUE4QkEsbUJBQTlCO0FBQ0FLLFFBQVFILHFCQUFSLEdBQWdDQSxxQkFBaEM7QUFDQUcsUUFBUVIsZUFBUixHQUEwQkEsZUFBMUI7QUFDQVEsUUFBUU4sZUFBUixHQUEwQkEsZUFBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDdkRBOztBQUVBOztBQUVBLElBQUlPLFdBQVcsRUFBZjs7QUFFQSxJQUFJZixVQUFVLEVBQWQ7O0FBRUEsU0FBU2dCLGVBQVQsQ0FBeUJDLFlBQXpCLEVBQXVDOztBQUVuQyxXQUFPQSxlQUFlLEVBQXRCO0FBQ0g7O0FBRUQsU0FBU0MsT0FBVCxDQUFpQlgsSUFBakIsRUFBdUI7QUFDbkJQLGNBQVVPLElBQVY7QUFDSDs7QUFFRCxTQUFTWSxPQUFULEdBQW1CO0FBQ2YsV0FBT25CLE9BQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7O1FBRVNrQixPLEdBQUFBLE87UUFBU0MsTyxHQUFBQSxPO1FBQVNILGUsR0FBQUEsZTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGRcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZTA1OGY3ZTE5YzdiMGNlMWM5OSIsIi8vZGVmaW5lKFsnLi9kaXNwbGF5LW1vZHVsZSddLCBmdW5jdGlvbihkaXNwTW9kdWxlKSB7XHJcblxyXG4vLyhmdW5jdGlvbigpIHtcclxuXHJcbi8vdmFyIGRpc3BNb2R1bGUgPSBkaXNwbGF5TW9kdWxlKCk7XHJcblxyXG4vL3ZhciBkaXNwTW9kdWxlID0gcmVxdWlyZSgnLi9kaXNwbGF5LW1vZHVsZScpO1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheUVtcGxveWVlTmFtZSwgZGlzcGxheUVtcGxveWVlU2FsYXJ5LCBzZXRFbXBsb3llZU5hbWUsIGdldEVtcGxveWVlTmFtZSB9IGZyb20gJy4vZGlzcGxheS1tb2R1bGUnO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5TZXRJbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBlbXBOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbXBOYW1lXCIpLnZhbHVlO1xyXG4gICAgLy9kaXNwTW9kdWxlLnNldEVtcGxveWVlTmFtZShlbXBOYW1lKTtcclxuICAgIHNldEVtcGxveWVlTmFtZShlbXBOYW1lKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkdldEluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBlbXBXb3JraW5nSG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtcFdvcmtpbmdIb3Vyc1wiKS52YWx1ZTtcclxuICAgIC8vdmFyIGNhbGN1bGF0ZWRTYWxhcnkgPSBkaXNwTW9kdWxlLmRpc3BsYXlFbXBsb3llZVNhbGFyeShlbXBXb3JraW5nSG91cnMpO1xyXG4gICAgdmFyIGNhbGN1bGF0ZWRTYWxhcnkgPSBkaXNwbGF5RW1wbG95ZWVTYWxhcnkoZW1wV29ya2luZ0hvdXJzKTtcclxuXHJcbiAgICAvL3ZhciBzdHIgPSBkaXNwTW9kdWxlLmdldEVtcGxveWVlTmFtZSgpICsgXCIgYW5kIHNhbGFyeSBpcyA6XCIgKyBjYWxjdWxhdGVkU2FsYXJ5O1xyXG4gICAgdmFyIHN0ciA9IGdldEVtcGxveWVlTmFtZSgpICsgXCIgYW5kIHNhbGFyeSBpcyA6XCIgKyBjYWxjdWxhdGVkU2FsYXJ5O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLmlubmVySFRNTCA9IHN0cjtcclxuXHJcbn0pO1xyXG5cclxuLy99KSgpO1xyXG4vL30pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9hcHAuanMiLCIvL3ZhciBkaXNwbGF5TW9kdWxlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4vL2RlZmluZShbJy4vZW1wbG95ZWUtbW9kdWxlJ10sIGZ1bmN0aW9uKGVtcE1vZHVsZSkge1xyXG5cclxuLy92YXIgZW1wTW9kdWxlID0gZW1wbG95ZWVNb2R1bGUoKTtcclxuXHJcbmltcG9ydCB7IHNldE5hbWUsIGdldE5hbWUsIGNhbGN1bGF0ZVNhbGFyeSB9IGZyb20gJy4vZW1wbG95ZWUtbW9kdWxlJ1xyXG5cclxuLy92YXIgZW1wTW9kdWxlID0gcmVxdWlyZSgnLi9lbXBsb3llZS1tb2R1bGUnKTtcclxuXHJcbmZ1bmN0aW9uIHNldEVtcGxveWVlTmFtZShuYW1lKSB7XHJcblxyXG4gICAgLy92YXIgZW1wbG95ZWVOYW1lID0gZW1wTW9kdWxlLnNldE5hbWUobmFtZSk7XHJcbiAgICBzZXROYW1lKG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbXBsb3llZU5hbWUobmFtZSkge1xyXG5cclxuICAgIC8vcmV0dXJuIGVtcE1vZHVsZS5nZXROYW1lKCk7XHJcbiAgICByZXR1cm4gZ2V0TmFtZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RW1wbG95ZWVOYW1lKCkge1xyXG5cclxuICAgIC8vIHZhciBlbXBsb3llZU5hbWUgPSBlbXBNb2R1bGUuZ2V0TmFtZSgpO1xyXG4gICAgLy8gcmV0dXJuIFwiTXkgbmFtZSBpcyA6IFwiICsgZW1wbG95ZWVOYW1lO1xyXG5cclxuICAgIHZhciBlbXBsb3llZU5hbWUgPSBnZXROYW1lKCk7XHJcbiAgICByZXR1cm4gXCJNeSBuYW1lIGlzIDogXCIgKyBlbXBsb3llZU5hbWU7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RW1wbG95ZWVTYWxhcnkod29ya2luZ0hvdXJzKSB7XHJcblxyXG4gICAgLy8gdmFyIGVtcGxveWVlU2FsYXJ5ID0gZW1wTW9kdWxlLmNhbGN1bGF0ZVNhbGFyeSh3b3JraW5nSG91cnMpO1xyXG4gICAgLy8gcmV0dXJuIGVtcGxveWVlU2FsYXJ5O1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgdmFyIGVtcGxveWVlU2FsYXJ5ID0gY2FsY3VsYXRlU2FsYXJ5KHdvcmtpbmdIb3Vycyk7XHJcbiAgICByZXR1cm4gZW1wbG95ZWVTYWxhcnk7XHJcbn1cclxuXHJcbmV4cG9ydHMuZGlzcGxheUVtcGxveWVlTmFtZSA9IGRpc3BsYXlFbXBsb3llZU5hbWU7XHJcbmV4cG9ydHMuZGlzcGxheUVtcGxveWVlU2FsYXJ5ID0gZGlzcGxheUVtcGxveWVlU2FsYXJ5O1xyXG5leHBvcnRzLnNldEVtcGxveWVlTmFtZSA9IHNldEVtcGxveWVlTmFtZTtcclxuZXhwb3J0cy5nZXRFbXBsb3llZU5hbWUgPSBnZXRFbXBsb3llZU5hbWU7XHJcblxyXG4vLyByZXR1cm4ge1xyXG4vLyAgICAgZGlzcGxheUVtcGxveWVlTmFtZTogZGlzcGxheUVtcGxveWVlTmFtZSxcclxuLy8gICAgIGRpc3BsYXlFbXBsb3llZVNhbGFyeTogZGlzcGxheUVtcGxveWVlU2FsYXJ5LFxyXG4vLyAgICAgc2V0RW1wbG95ZWVOYW1lOiBzZXRFbXBsb3llZU5hbWUsXHJcbi8vICAgICBnZXRFbXBsb3llZU5hbWU6IGdldEVtcGxveWVlTmFtZSxcclxuLy8gfTtcclxuXHJcbi8vfVxyXG4vL30pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9kaXNwbGF5LW1vZHVsZS5qcyIsIi8vZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcclxuXHJcbi8vdmFyIGVtcGxveWVlTW9kdWxlID0gZnVuY3Rpb24oKSB7XHJcblxyXG52YXIgZW1wbG95ZWUgPSB7fTtcclxuXHJcbnZhciBlbXBOYW1lID0gJyc7XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTYWxhcnkod29ya2luZ2hvdXJzKSB7XHJcblxyXG4gICAgcmV0dXJuIHdvcmtpbmdob3VycyAqIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcclxuICAgIGVtcE5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIGVtcE5hbWU7XHJcbn1cclxuXHJcbi8vIGV4cG9ydHMuc2V0TmFtZSA9IHNldE5hbWU7XHJcbi8vIGV4cG9ydHMuZ2V0TmFtZSA9IGdldE5hbWU7XHJcbi8vIGV4cG9ydHMuY2FsY3VsYXRlU2FsYXJ5ID0gY2FsY3VsYXRlU2FsYXJ5O1xyXG5cclxuZXhwb3J0IHsgc2V0TmFtZSwgZ2V0TmFtZSwgY2FsY3VsYXRlU2FsYXJ5IH07XHJcblxyXG4vLyBlbXBsb3llZS5zZXROYW1lID0gc2V0TmFtZTtcclxuLy8gZW1wbG95ZWUuZ2V0TmFtZSA9IGdldE5hbWU7XHJcbi8vIGVtcGxveWVlLmNhbGN1bGF0ZVNhbGFyeSA9IGNhbGN1bGF0ZVNhbGFyeTtcclxuXHJcbi8vIHJldHVybiBlbXBsb3llZTtcclxuLy99XHJcblxyXG4vL30pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9lbXBsb3llZS1tb2R1bGUuanMiXSwic291cmNlUm9vdCI6IiJ9