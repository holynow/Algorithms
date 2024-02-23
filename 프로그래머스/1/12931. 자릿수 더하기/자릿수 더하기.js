const solution = (n) => {
    let sum = 0;
    const arr = Array.from(String(n));
    for(num of arr) sum += ~~(num);
    return sum;
};