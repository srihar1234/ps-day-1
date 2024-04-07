function largestElement(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let res = largestElement([1,122,14,56,32]);
console.log(res);