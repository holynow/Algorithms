const solution = (a, b) => {
    let result = 0;
    a.forEach((e, i) => {
       b[i] ? result += e : result -= e;
    });
    return result
}