
// for chechking it is array or not
let arr = [1,2,3,4];
console.log(Array.isArray(arr)); //this is the way to check wheather it is array or not

// two objects coppy in third objects

let student = {
  name: "raj",
  roll: "88",
};
let employee = {
  emName: "abhishek sir",
  postion: "software eng.",
};

let objAns = {};

Object.assign(objAns, student);
Object.assign(objAns, employee);
console.log(objAns, "final object");
