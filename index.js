const employee = {
    name: "Sally",
    streetAddress: "130 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, name, value){
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const cloneEmployee = {...employee};
    delete cloneEmployee.name;
    return cloneEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}