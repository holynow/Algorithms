const solution = (arr, div) => {
    let answer = [];
    for (i of arr.sort((a,b)=>a-b)){
        if (i % div === 0){
          answer.push(i);
        }; 
    };
    return answer.length !== 0 ? answer : [-1];
}