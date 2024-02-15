function solution(num_list) {
    let count1= 0;
    let count2 = 0
    for (let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0) {
            count1++;
        } else {
            count2++;
        }
    }
   return [count1, count2]
}