function solution(my_string) {
    
    let answer ="";
    const removeArr = ['a', 'e', 'i', 'o','u'];
    for (let i = 0; i < my_string.length; i++){
       if(!removeArr.includes(my_string[i])){
           answer += my_string[i]
       }
    }
    return answer
}
