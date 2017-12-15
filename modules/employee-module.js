//define([], function() {

//var employeeModule = function() {

//var employee = {};

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

export { setName, getName, calculateSalary };

// employee.setName = setName;
// employee.getName = getName;
// employee.calculateSalary = calculateSalary;

// return employee;
//}

//})