const solution = (age) => {
    //age 가 주어질때 2022년을 기준출생연도 return
    const year = 2022 + 1 - age;
   return year;
    return `2022년 기준 ${age}살이므로 ${year}년생입니다.`;
};

solution(40);