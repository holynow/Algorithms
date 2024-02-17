const solution = (s) => {
let size = Math.round(s.length/2);
return s.length % 2 === 0 ? s.slice(size-1, size+1) : s.slice(size-1, size);
}