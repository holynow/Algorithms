function solution(a, b) {
    var result = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        result = result + i;
    }
    return result;
}