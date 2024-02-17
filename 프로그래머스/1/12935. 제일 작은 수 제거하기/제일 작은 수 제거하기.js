function solution(arr) {
    if(arr.length > 1){
        arr = arr.filter((e)=> e !== Math.min(...arr));
       return arr;
    } else {
        return [-1]
    }
}