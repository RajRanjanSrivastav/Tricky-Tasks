let arr = [2, 4, 5, 1, 0, 9];
let n = arr.length;
let s = 0;
console.log(arr, "before sorting");
divideArr(arr, s, n - 1);
console.log(arr, "after sorting");

//for divide the array utill it becomes undivided
function divideArr(arr, s, e) {
  if (s >= e) {
    return;
  }

  let mid = Math.floor(s + (e - s) / 2);

  divideArr(arr, s, mid);
  divideArr(arr, mid + 1, e);
  mergeSort(arr, s, mid, e);
}

// for merege all the arr in sorted array

function mergeSort(arr, s, mid, e) {
    
  let mergeArr = [];
  let firstarr = s;
  let secondarr = mid + 1;
  let idx = 0;

  while (firstarr <= mid && secondarr <= e) {
    if (arr[firstarr] <= arr[secondarr]) {
      mergeArr[idx++] = arr[firstarr++];
    } else {
      mergeArr[idx++] = arr[secondarr++];
    }
  }

  //if some elements is remaning in any array
  while (firstarr <= mid) {
    mergeArr[idx++] = arr[firstarr++];
  }

  while (secondarr <= e) {
    mergeArr[idx++] = arr[secondarr++];
  }

  //loop for copy the element in main array

  for (let i = 0, j = s; i < mergeArr.length; i++, j++) {
    arr[j] = mergeArr[i];
  }
}
