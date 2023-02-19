
function isPrime(num) {
    for (var i = 2; i < Math.sqrt(num) + 1; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function getNextPrime(prime) {
    var sortedArray = prime.sort((a,b)=> a-b);
    var last = sortedArray[sortedArray.length-1];
    for (var count = last + 1; ; ++count) {
       if (isPrime(count)) {
           break;
       }
    }
    console.log(count);
}

getNextPrime([1, 2, 3, 4, 5, 7]);