// equation  4x^2 + 6x + 2 = 0
// equation  x^2 - 7x + 10 = 0

let a = 1;
let b = -6;
let c = 9;
let d = b * b - 4 * a * c;
let roo1 = [-b + Math.sqrt(d)] / (2 * a);
let roo2 = [-b - Math.sqrt(d)] / (2 * a);
if (d < 0) {
  console.log("this equation has no real root", roo1, " ", roo2);
} else if (d > 0) {
  console.log("this equation has distinct real root", roo1, " ", roo2);
} else {
  console.log("this equation has one repated real root", roo1, " ", roo2);
}
