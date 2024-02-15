function solution(numbers) {
    
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 5.5
    //[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] 94.0
    
    var answer = 0;
    numbers.map(v => {
        answer+=v/numbers.length
    })
    return answer;
}