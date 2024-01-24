let arr = [7,8,3,1,2,0,4]

console.log(arr,"before sorting");
for(let i=1;i<arr.length;i++)
{
    let currentEle = arr[i];
    let j=i-1;

    while(j>=0 && currentEle<arr[j])
    {
        arr[j+1]=arr[j];
        j--;
    }

    arr[j+1]=currentEle;

    // console.log(arr,"sorting");
}

console.log(arr,"after sorting");