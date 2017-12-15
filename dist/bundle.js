(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//define(['./display-module'], function(dispModule) {

//(function() {

//var dispModule = displayModule();

var dispModule = require('./display-module');

//import { displayEmployeeName, displayEmployeeSalary, setEmployeeName, getEmployeeName } from './display-module';

document.getElementById("btnSetInfo").addEventListener("click", function() {
    var empName = document.getElementById("empName").value;
    dispModule.setEmployeeName(empName);
    //setEmployeeName(empName);
});

document.getElementById("btnGetInfo").addEventListener("click", function() {

    var empWorkingHours = document.getElementById("empWorkingHours").value;
    var calculatedSalary = dispModule.displayEmployeeSalary(empWorkingHours);
    //var calculatedSalary = displayEmployeeSalary(empWorkingHours);

    var str = dispModule.getEmployeeName() + " and salary is :" + calculatedSalary;
    //var str = getEmployeeName() + " and salary is :" + calculatedSalary;

    document.getElementById("result").innerHTML = str;

});

//})();
//})
},{"./display-module":2}],2:[function(require,module,exports){
//var displayModule = function() {

//define(['./employee-module'], function(empModule) {

//var empModule = employeeModule();

//import { setName, getName, calculateSalary } from './employee-module'

var empModule = require('./employee-module');

function setEmployeeName(name) {

    var employeeName = empModule.setName(name);
    //setName(name);
}

function getEmployeeName(name) {

    return empModule.getName();
    //return getName();
}

function displayEmployeeName() {

    // var employeeName = empModule.getName();
    // return "My name is : " + employeeName;

    var employeeName = empModule.getName();
    return "My name is : " + employeeName;

    // var employeeName = getName();
    // return "My name is : " + employeeName;

}

function displayEmployeeSalary(workingHours) {

    var employeeSalary = empModule.calculateSalary(workingHours);
    return employeeSalary;

    //var employeeSalary = calculateSalary(workingHours);
    //return employeeSalary;
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
},{"./employee-module":3}],3:[function(require,module,exports){
//define([], function() {

//var employeeModule = function() {

//let employee = {};

function calculateSalary(workinghours) {

    return workinghours * 10;
}

function setName(name) {
    this.name = name;
}

function getName() {
    return this.name;
}

exports.setName = setName;
exports.getName = getName;
exports.calculateSalary = calculateSalary;

//export { setName, getName, calculateSalary };

// employee.setName = setName;
// employee.getName = getName;
// employee.calculateSalary = calculateSalary;

//return employee;
//}

//})
},{}]},{},[1]);
