//var displayModule = function() {

//define(['./employee-module'], function(empModule) {

//var empModule = employeeModule();

import { setName, getName, calculateSalary } from './employee-module'

//var empModule = require('./employee-module');

export function setEmployeeName(name) {

    //var employeeName = empModule.setName(name);
    setName(name);
}

export function getEmployeeName() {

    //return empModule.getName();
    return getName();
}

export function displayEmployeeName() {

    // var employeeName = empModule.getName();
    // return "My name is : " + employeeName;

    var employeeName = getName();
    return "My name is : " + employeeName;

}

export function displayEmployeeSalary(workingHours) {

    // var employeeSalary = empModule.calculateSalary(workingHours);
    // return employeeSalary;

    //debugger;
    var employeeSalary = calculateSalary(workingHours);
    return employeeSalary;
}

// exports.displayEmployeeName = displayEmployeeName;
// exports.displayEmployeeSalary = displayEmployeeSalary;
// exports.setEmployeeName = setEmployeeName;
// exports.getEmployeeName = getEmployeeName;

// return {
//     displayEmployeeName: displayEmployeeName,
//     displayEmployeeSalary: displayEmployeeSalary,
//     setEmployeeName: setEmployeeName,
//     getEmployeeName: getEmployeeName,
// };

//}
//})