function solution(n) {
  let answer = [];
  let m = String(n).split('').reverse();
  for (let i =0; i < m.length; i++) {
    answer.push(~~(m[i]));
  }
    return answer;
}