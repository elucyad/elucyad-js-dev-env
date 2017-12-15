//define(['./display-module'], function(dispModule) {

//(function() {

//var dispModule = displayModule();

//var dispModule = require('./display-module');

import { displayEmployeeSalary, setEmployeeName, getEmployeeName } from './display-module';

document.getElementById("btnSetInfo").addEventListener("click", function() {
    var empName = document.getElementById("empName").value;
    //dispModule.setEmployeeName(empName);
    setEmployeeName(empName);
});

document.getElementById("btnGetInfo").addEventListener("click", function() {

    var empWorkingHours = document.getElementById("empWorkingHours").value;
    //var calculatedSalary = dispModule.displayEmployeeSalary(empWorkingHours);
    var calculatedSalary = displayEmployeeSalary(empWorkingHours);

    //var str = dispModule.getEmployeeName() + " and salary is :" + calculatedSalary;
    var str = getEmployeeName() + " and salary is :" + calculatedSalary;

    document.getElementById("result").innerHTML = str;

});

//})();
//})