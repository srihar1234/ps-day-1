
function fibboNum(n){
    let a = 0, b = 1;
    if (n === 1) return a;
    if (n === 2) return b;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

let res = fibboNum(18);
console.log(res);