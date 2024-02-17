const solution = (a,b) => {
    let result = 0;
    for (i in b) {
        result += a[i]*b[i];
    }
    return result;
}