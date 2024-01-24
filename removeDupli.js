let arr1 = [1, 2, 2, 3];
let arr2 = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6];
let ans = [];
let len1 = arr1.length;
let len2 = arr2.length;
let max = Math.max(len1, len2);
let trak = new Array(max).fill(false);

for (let i = 0; i < len1; i++) {
  if (trak[arr1[i]] == false) {
    ans.push(arr1[i]);
    trak[arr1[i]] = true;
  }
}

for (let i = 0; i < len2; i++) {
  if (trak[arr2[i]] == false) {
    ans.push(arr2[i]);
    trak[arr2[i]] = true;
  }
}
console.log(ans, "final");