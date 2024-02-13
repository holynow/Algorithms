const solution = (n) => {
    let result = 0;
    let answer = String(n);
    for(let i = 0; i < answer.length; i++){
       result += ~~(answer[i]);
    }
    return result;
}