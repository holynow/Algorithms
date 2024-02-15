function solution(my_string, n) {
    var answer = '';
    let arr = [...my_string];
    answer = arr.map(v => v.repeat(n)).join('')
    return answer;
}
