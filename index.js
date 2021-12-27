// Write your solution in this file!
const employee = {
    name: 'Jake', 
    streetAddress: '12 Whatever', 
}; 

function updateEmployeeWithKeyAndValue(employees, key, value) {
    const newEmployee = {...employees}; 
    newEmployee[key] = value; 
    return newEmployee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeChange, key, value) {
    employeeChange[key] = value; 
    return employeeChange; 
}

function deleteFromEmployeeByKey(employeeObj, delKey) {
    const newEmployeeChange = {...employeeObj}; 
    delete newEmployeeChange[delKey]; 
    return newEmployeeChange;
}

function destructivelyDeleteFromEmployeeByKey(delEmployee, delKey) {
    delete delEmployee[delKey];
    return delEmployee; 
};
