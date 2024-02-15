function solution(array, height) {
    let count = 0;
    for(ki of array) {
        if(ki > height) {
            count++;
        }
    }
    return count
}