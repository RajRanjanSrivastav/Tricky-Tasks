// equation  4x^2 + 6x + 2 = 0
// equation  x^2 - 7x + 10 = 0

let a = 1;
let b = -7;
let c = 10;
let d = b * b - 4 * a * c;
let roo1 = [-b + Math.sqrt(d)] / (2 * a);
let roo2 = [-b - Math.sqrt(d)] / (2 * a);
console.log(roo1, " ", roo2);
