
//A number that is fully divisible only by 1 and itself is called a prime number.
//  It cannot be divided evenly by any other number, including 2, unless it is 2 itself.

function primeNumber(num){
   
    if(num<1){
        return false;
    }

    for(let i=2;i<num.length;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

//Example
console.log(primeNumber(2));
console.log(primeNumber(29));

