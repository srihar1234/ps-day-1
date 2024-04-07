
function secondLargestElement(arr){
    let max = -Infinity;
    let secondMax = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i]>secondMax && arr[i]!=max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

let res = secondLargestElement([1,122,111,56,32]);
console.log(res);