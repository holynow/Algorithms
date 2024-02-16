function solution(s, n) {
  var answer = '';
  for(i = 0; i < s.length; i++) {
    if(s[i].match(/[a-zA-Z]/)) {
      const reg = s.charCodeAt(i);
      const eng = reg <= 90 ? 65 : 97;
      answer += String.fromCharCode(((reg - eng + n) % 26) + eng);
    } else {answer += s[i]};
  } 
  return answer;
}