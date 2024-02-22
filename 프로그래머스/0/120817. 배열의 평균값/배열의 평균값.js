function solution(numbers) {    
    let answer = 0;
    numbers.map(v => answer+=v/numbers.length);
    return answer;
};