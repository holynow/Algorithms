function solution(t, p) {

    let result = 0;
    for(let i = 0; i < t.length; i++){
        if(t.slice(i, i + p.length).length === p.length) {
           if (t.slice(i, i + p.length) <= p) {
               result += 1;
           }
        }
    }
    return result
}