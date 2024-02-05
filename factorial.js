let n = 5;
let ans = findFact(n);
console.log("Factorial of ", n, " is =>", ans);

function findFact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * findFact(n - 1);
}
