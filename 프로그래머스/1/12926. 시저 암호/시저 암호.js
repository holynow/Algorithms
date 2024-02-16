  const solution = (s, n)=> {
    let reg, eng, answer = '';
    let arr = Array.from(s);
    for(i in arr) {
        reg = s.charCodeAt(i); 
        if(s[i].match(/[A-Za-z]/g)) { 
        eng = reg <= 90 ? 65 : 97; 
        answer += String.fromCharCode(((reg - eng + n) % 26) + eng); 
        } else answer += s[i];
    };
    return answer;
  }
