const solution = (phoneNum) => {
   return "*".repeat(phoneNum.length-4) + phoneNum.slice(-4);
};