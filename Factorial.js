
function factorial(num){
    let fact = 1;
    for(let i=1;i<=num;i++){
        fact = fact*i;
    }
    return fact;
}

let res = factorial(8);
console.log(res);