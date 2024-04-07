//CONCEPT OF PRIME NUMBERS

//The numbers which are divisible only by 1 and itself is prime numbers..

function checkPrime(n){
    let flag = true;
    if(n==1 || n<1){
        flag = false;
    }
    else if(n==2){
        flag = true; 
    }
    else{
        for(let i=2;i*i<=n;i++){
            if(n%i == 0){
                flag = false;
                break;
            }   
        }
    }
    return flag;
}

let res = checkPrime(27);
if(res){
    console.log(`GIVEN NUMBER IS PRIME`);
}else{
    console.log(`GIVEN NUMBER IS NOT A PRIME NUMBER`);
}
