function updateEmployeeWithKeyAndValue(obj, key, value) {
    const clone = Object.assign({}, obj);
    clone[key] = value;
  
    return clone;
  }
  const employee = {
    name: 'John Doe',
    address: '11 Broadway',
    position: 'Manager'
  };
  updateEmployeeWithKeyAndValue(employee, 'position', 'Senior Manager');
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  
    // return the updated employee object
    return obj;
  }
  function deleteFromEmployeeByKey(obj, key) {
    const clone = Object.assign({}, obj);
    delete clone[key];
  
    // return the cloned object
    return clone;
  }
  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
  
    // return the modified object
    return obj;
  }