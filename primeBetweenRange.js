
function primeNumber(num){
   
    if(num<1){
        return false;
    }

    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}


function primeNumberRange(start,end){
let primes=[];
    for(let num=start;num<=end;num++){

        if(primeNumber(num)){
            primes[primes.length]=num;
        }
        


    }
return primes;

}

console.log(primeNumberRange(10,50));
//Prime numbers between 10 and 50: [ 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
