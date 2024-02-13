function solution(num) {
let count = 0;
if (num > 1){
    while(!(num === 1)){
        count++;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
    return count >= 500 ? -1 : count;
} else if (num === 1) {
    return 0;
    }
};