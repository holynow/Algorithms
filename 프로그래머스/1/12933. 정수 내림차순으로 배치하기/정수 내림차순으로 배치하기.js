function solution(number) {
  return parseInt(String(number).split('').sort((a, b) => b-a).join(''));
};