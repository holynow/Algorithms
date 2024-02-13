const solution = (n) => {
    let index = 1;
    let sum = 0;
    while(index <= n){
       if ((n % index === 0)) {
        sum += index;
       }
       index ++;
    }
    return sum;
}